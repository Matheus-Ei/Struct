import { Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const auth = (req: Request, res: Response, next: NextFunction) => {
    const apiUser = process.env.API_USER;
    const apiToken = process.env.API_TOKEN;

    const user = req.headers['user'] as string;
    const token = req.headers['token'] as string;

    if (!user || !token) {
        return res.status(401).json({ message: "Missing user or token in headers" });
    }

    if (user !== apiUser || token !== apiToken) {
        return res.status(403).json({ message: "Invalid user or token" });
    }

    next();
};


export default auth;
