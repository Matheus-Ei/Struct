import { Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
import Cookie from "../services/cookie.js";
import Token from "../services/token.js";

dotenv.config();

const auth = (req: Request, res: Response, next: NextFunction) => {
    if (req.path === "/users/login" || req.path === "/users/register" || req.path === "/token/refresh") {
        return next();
    }

    const accessToken = Cookie.get("access_token", req);
    const mail = req.headers["mail"] as string;

    const tk = new Token(process.env.JWT_SECRET as string);

    if (!accessToken) {
        return res.status(401).json({ message: "Missing token cookie" });
    }

    if (!tk.verify(accessToken, mail, "mail")) {
        return res.status(401).json({ message: "Invalid token" });
    }

    next();
};

export default auth;
