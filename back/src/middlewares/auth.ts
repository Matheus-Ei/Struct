// Libraries
import { Request, Response, NextFunction } from "express";
import dotenv from "dotenv";

// Local
import Cookie from "../services/cookie.js";
import Token from "../services/token.js";

dotenv.config();

const autorizedPaths = [
    "/user/check/nickname",
    "/user/check/mail",
    "/user/auth/google",
    "/user/login",
    "/user/register",
    "/token/check",
    "/token/refresh",
];

const auth = (req: Request, res: Response, next: NextFunction) => {
    if (autorizedPaths.includes(req.path)) {
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
