import { Request, Response } from "express";
import UserModel from "../models/user.js";
import Hash from "../services/hash.js";
import Token from "../services/token.js";
import Cookie from "../services/cookie.js";

class UserController {
    public async get(req: Request, res: Response) {
        const id = Cookie.get('id', req);

        try {
            const user = await UserModel.findByPk(id);

            if (user) {
                res.status(200).json(user);
            } else {
                res.status(404).json({ message: "User not found" });
            }
        } catch (error) {
            res.status(500).json({ message: "Error fetching user", error });
        }
    }

    public async register(req: Request, res: Response) {
        const { name, nickname, mail, password } = req.body;

        const hashObj = new Hash();
        const hashPassword = await hashObj.make(password);

        try {
            const newUser = await UserModel.create({
                name,
                nickname,
                mail,
                password: hashPassword,
                paid: false,
            });

            res.status(201).json({ newUser });
        } catch (error) {
            res.status(500).json({ message: "Error creating the user", error });
        }
    }

    public async login(req: Request, res: Response) {
        const { mail, password } = req.body;

        try {
            const user = await UserModel.findOne({
                where: {
                    mail,
                },
            });

            const hashObj = new Hash();
            const isMatchPass = await hashObj.compare(
                password,
                user?.dataValues.password
            );

            if (user) {
                if (isMatchPass) {
                    const refresh = new Token(
                        process.env.REFRESH_SECRET as string
                    );
                    const access = new Token(process.env.JWT_SECRET as string);

                    const accessTk = access.generate(
                        { id: user?.dataValues.id },
                        "1h"
                    );
                    const refreshTk = refresh.generate(
                        { id: user?.dataValues.id },
                        "7d"
                    );

                    Cookie.generate("access_token", accessTk, res);
                    Cookie.generate("refresh_token", refreshTk, res);
                    Cookie.generate("id", user?.dataValues.id, res);

                    res.status(201).json({ status: true });
                } else {
                    res.status(201).json({ status: false });
                }
            } else {
                res.status(201).json({ status: false });
            }
        } catch (error) {
            res.status(500).json({
                message: "Error checking user login",
                error,
            });
        }
    }

    public async pay(req: Request, res: Response) {}

    public async cancelSubscription(req: Request, res: Response) {}

    public async logout(req: Request, res: Response) {}

    public async delete(req: Request, res: Response) {}

    public async projects(req: Request, res: Response) {}
}

export default new UserController();
