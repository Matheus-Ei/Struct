import { Request, Response } from "express";
import Token from "../services/token.js";
import dotenv from "dotenv";
import Cookie from "../services/cookie.js";

dotenv.config();

class TokenController {
    public async refresh(req: Request, res: Response) {
        const id = Cookie.get("id", req);
        const refreshToken = Cookie.get("refresh_token", req);

        const refresh = new Token(process.env.REFRESH_SECRET as string);
        const access = new Token(process.env.JWT_SECRET as string);

        const refreshIsValid = refresh.verify(refreshToken, id, "id");

        if (!refreshIsValid) {
            res.status(401).json({
                message: "The refresh token isn't valid",
            });
        }

        try {
            const accessTk = access.generate({ id }, "1h");
            Cookie.generate("access_token", accessTk, res);

            res.status(201).json({
                message: "Access token was generated successfuly",
            });
        } catch (error) {
            res.status(500).json({
                message: "Error refreshing the token",
                error,
            });
        }
    }
    public async check(req: Request, res: Response) {
        const id = Cookie.get("id", req);
        const accessToken = Cookie.get("access_token", req);

        const access = new Token(process.env.JWT_SECRET as string);

        const accessIsValid = access.verify(accessToken, id, "id");

        if (!accessIsValid) {
            res.status(401).json({
                message: "The access token isn't valid",
                login: false,
            });
        } else {
            res.status(200).json({
                message: "The access token is valid",
                login: true,
            });
        }
    }
}

export default new TokenController();
