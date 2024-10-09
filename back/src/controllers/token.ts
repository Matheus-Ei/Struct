import { Request, Response } from "express";
import Token from "../services/token.js";
import dotenv from "dotenv";

dotenv.config();

class TokenController {
    public async refresh(req: Request, res: Response) {
        const { mail, refreshToken } = req.body;

        const refresh = new Token(process.env.REFRESH_SECRET as string);
        const access = new Token(process.env.JWT_SECRET as string);

        const refreshIsValid = refresh.verify(refreshToken, mail, "mail");

        if (!refreshIsValid) {
            res.status(401).json({
                message: "The refresh token isn't valid",
            });
        }

        try {
            const accessTk = access.generate({ mail }, "1h");
            res.status(201).json({
                message: "Access token was generated successfuly",
                token: accessTk,
            });
        } catch (error) {
            res.status(500).json({
                message: "Error refreshing the token",
                error,
            });
        }
    }
    public async check(req: Request, res: Response) {
        const { mail, accessToken } = req.body;

        const access = new Token(process.env.JWT_SECRET as string);

        const accessIsValid = access.verify(accessToken, mail, "mail");

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
