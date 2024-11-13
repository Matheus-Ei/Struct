// Libraries
import { Request, Response } from "express";
import dotenv from "dotenv";

// Local
import Token from "../services/token.js";
import Cookie from "../services/cookie.js";

dotenv.config();

class TokenController {
    public async refresh(req: Request, res: Response) {
        const accessObject = new Token(process.env.JWT_SECRET as string);
        const id = Cookie.get("id", req);
        const refreshObject = new Token(process.env.REFRESH_SECRET as string);
        const refreshToken = Cookie.get("refresh_token", req);

        const refreshIsValid = refreshObject.verify(refreshToken, id, "id");

        if (!refreshIsValid) {
            res.status(401).json({
                message: "The refresh token isn't valid",
            });

            return;
        }

        try {
            const accessTk = accessObject.generate({ id }, "1h");
            Cookie.generate("access_token", accessTk, res);

            res.status(201).json({
                message: "Access token was generated successfuly",
            });

            return;
        } catch (error) {
            res.status(500).json({
                message: "Error refreshing the token",
                error,
            });

            return;
        }
    }

    public async check(req: Request, res: Response) {
        const accessToken = Cookie.get("access_token", req);
        const id = Cookie.get("id", req);
        const accessObject = new Token(process.env.JWT_SECRET as string);

        const accessIsValid = accessObject.verify(accessToken, id, "id");

        if (!accessIsValid) {
            res.status(401).json({
                message: "The access token isn't valid",
                login: false,
            });

            return;
        } else {
            res.status(200).json({
                message: "The access token is valid",
                login: true,
            });

            return;
        }
    }
}

export default new TokenController();
