// Libraries
import { Request, Response } from "express";
import dotenv from "dotenv";

// Services
import Token from "../services/token.js";
import Cookie from "../services/cookie.js";

dotenv.config();

class TokenController {
    private getValues(req: Request) {
        const id = Cookie.get("id", req);

        const refreshToken = Cookie.get("refresh_token", req);
        const accessToken = Cookie.get("access_token", req);

        const refreshObject = new Token(process.env.REFRESH_SECRET as string);
        const accessObject = new Token(process.env.JWT_SECRET as string);

        return { id, refreshToken, accessToken, refreshObject, accessObject };
    }

    public async refresh(req: Request, res: Response) {
        const { refreshObject, refreshToken, id, accessObject } =
            this.getValues(req);

        const refreshIsValid = refreshObject.verify(refreshToken, id, "id");

        if (!refreshIsValid) {
            res.status(401).json({
                message: "The refresh token isn't valid",
            });
        }

        try {
            const accessTk = accessObject.generate({ id }, "1h");
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
        const { accessToken, id, accessObject } = this.getValues(req);

        const accessIsValid = accessObject.verify(accessToken, id, "id");

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
