// Libraries
import { Request, Response, NextFunction } from "express";
import dotenv from "dotenv";

// Local
import Cookie from "../services/cookie.js";
import Token from "../services/token.js";

dotenv.config();

const auth = (req: Request, res: Response, next: NextFunction) => {
    if (
        req.path === "/user/check/nickname" ||
        req.path === "/user/check/mail" ||
        req.path === "/user/auth/google" ||
        req.path === "/user/login" ||
        req.path === "/user/register" ||
        req.path === "/token/check" ||
        req.path === "/token/refresh"
    ) {
        return next();
    }

    const accessToken = Cookie.get("access_token", req);
    const id = Cookie.get("id", req);

    const tk = new Token(process.env.JWT_SECRET as string);

    if (!accessToken) {
        return res.status(401).json({ message: "Missing token cookie" });
    }

    if (!tk.verify(accessToken, id, "id")) {
        return res.status(401).json({ message: "Invalid token" });
    }

    next();
};

export default auth;
