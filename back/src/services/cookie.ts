import { Request, Response } from "express";

class Cookie {
    public static generate(
        name: string,
        value: string | object,
        res: Response,
        options: {
            maxAge?: number;
            httpOnly?: boolean;
            secure?: boolean;
            sameSite?: "strict" | "lax" | "none";
        } = {}
    ) {
        const cookieValue =
            typeof value === "object" ? JSON.stringify(value) : value;

        const cookieOptions = {
            httpOnly: true,
            secure: true,
            maxAge: 7 * 24 * 60 * 60 * 1000,
            sameSite: "strict" as "strict", //"none" as "none"
            ...options,
        };

        res.cookie(name, cookieValue, cookieOptions);

        const setCookieHeader = res.getHeader("Set-Cookie");
        if (Array.isArray(setCookieHeader)) {
            res.setHeader(
                "Set-Cookie",
                setCookieHeader.map((cookie) =>
                    cookie.includes("Partitioned")
                        ? cookie
                        : `${cookie}; Partitioned`
                )
            );
        } else if (typeof setCookieHeader === "string") {
            if (!setCookieHeader.includes("Partitioned")) {
                res.setHeader("Set-Cookie", `${setCookieHeader}; Partitioned`);
            }
        }
    }

    public static delete(name: string, res: Response) {
        try {
            res.clearCookie(name);
        } catch (error) {
            console.error(error);
        }
    }

    public static get(name: string, req: Request) {
        try {
            return req.cookies[name];
        } catch (error) {
            console.error(error);
            return null;
        }
    }
}

export default Cookie;
