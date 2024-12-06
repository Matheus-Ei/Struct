// Libraries
import { Request, Response } from "express";

// Local
import Cookie from "../services/cookie";
import Token from "../services/token";
import Hash from "../services/hash";

// Models
import UserModel from "../models/user";

class UserController {
    public async get(req: Request, res: Response) {
        const id = Cookie.get("id", req);
        const { nickname, mail } = req.query;

        try {
            // Check if the user mail or nickname is avaliable
            if (nickname || mail) {
                const query: any = {};
                if (mail) query.mail = mail;
                if (nickname) query.nickname = nickname;

                const user = await UserModel.findOne({
                    where: query,
                });

                if (user) {
                    res.status(200).json({
                        message: "User found",
                        isAvailable: false,
                    });
                    return;
                } else {
                    res.status(200).json({
                        message: "User not found",
                        isAvailable: true,
                    });
                    return;
                }
            }

            if (!id) {
                res.status(400).json({ message: "Missing id" });
                return;
            }

            const user = await UserModel.findByPk(id);
            if (user) {
                res.status(200).json({
                    message: "User found",
                    data: {
                        id: user.id,
                        name: user.name,
                        nickname: user.nickname,
                        mail: user.mail,
                        verified: user.verified,
                        autenticator: user.autenticator,
                        photo: user.photo,
                    },
                });
            } else {
                res.status(404).json({ message: "User not found" });
            }
        } catch (error) {
            res.status(500).json({ message: "Error fetching the user", error });
        }
    }

    public async register(req: Request, res: Response) {
        const {
            name,
            nickname,
            mail,
            password = " ",
            verified = false,
            autenticator = "Default",
            photo,
        } = req.body;

        // Check if the fields are missing
        if (!name || !nickname || !mail) {
            res.status(400).json({ message: "Missing fields" });
            return;
        }

        try {
            // Generate the hash for the password
            const hashObj = new Hash();
            const hashPassword = await hashObj.make(password);

            const newUser = await UserModel.create(
                {
                    name,
                    nickname,
                    mail,
                    verified,
                    autenticator,
                    photo,
                    password: hashPassword,
                    settings: {
                        country: "Brazil",
                        language: "pt-br",
                    },
                    subscription: {
                        last_paid: Date.now(),
                        subscription_plan_id: 1,
                    },
                },

                {
                    include: [
                        UserModel.associations.settings,
                        UserModel.associations.subscription,
                    ],
                }
            );

            if (!newUser) {
                res.status(500).json({ message: "Error creating the user" });
                return;
            }

            // Generate the tokens and set them as cookies to make user logged in
            const refresh = new Token(process.env.REFRESH_SECRET as string);
            const access = new Token(process.env.JWT_SECRET as string);

            const accessTk = access.generate(
                { id: newUser.dataValues.id },
                "1h"
            );
            const refreshTk = refresh.generate(
                { id: newUser.dataValues.id },
                "7d"
            );

            Cookie.generate("access_token", accessTk, res);
            Cookie.generate("refresh_token", refreshTk, res);
            Cookie.generate("id", newUser.dataValues.id, res);

            res.status(201).json({
                message: "User created",
                status: true,
                data: {
                    id: newUser.id,
                    name: newUser.name,
                    nickname: newUser.nickname,
                    mail: newUser.mail,
                    verified: newUser.verified,
                    autenticator: newUser.autenticator,
                    photo: newUser.photo,
                    settings: {
                        country: newUser.dataValues.settings.country,
                        language: newUser.dataValues.settings.language,
                    },
                    subscription: {
                        last_paid: newUser.dataValues.subscription.last_paid,
                        status: newUser.dataValues.subscription.status,
                    },
                },
            });
        } catch (error) {
            res.status(500).json({ message: "Error creating the user", error });
        }
    }

    public async login(req: Request, res: Response) {
        const { mail, password = " ", autenticator = "Default" } = req.body;

        // Check if the fields are missing
        if (!mail) {
            res.status(400).json({ message: "Missing mail" });
            return;
        }

        try {
            const user = await UserModel.findOne({
                where: {
                    mail,
                },
            });

            // Verify the password
            const hashObj = new Hash();
            const isMatchPass = await hashObj.compare(
                password,
                user?.dataValues.password
            );

            if (user) {
                // Verify if the user is trying to login with the correct autenticator
                if (user.dataValues.autenticator !== autenticator) {
                    res.status(401).send({
                        message: "The autenticator is not correct",
                    });
                    return;
                }

                // If the password is correct or the autenticator is "Auth" generate the tokens
                if (isMatchPass || autenticator === "Auth") {
                    const refresh = new Token(
                        process.env.REFRESH_SECRET as string
                    );
                    const access = new Token(process.env.JWT_SECRET as string);

                    const accessTk = access.generate(
                        { id: user.dataValues.id },
                        "1h"
                    );
                    const refreshTk = refresh.generate(
                        { id: user.dataValues.id },
                        "7d"
                    );

                    // Set the tokens as cookies to make user logged in
                    Cookie.generate("access_token", accessTk, res);
                    Cookie.generate("refresh_token", refreshTk, res);
                    Cookie.generate("id", user?.dataValues.id, res);

                    res.status(200).json({
                        message: "The login was a success",
                    });
                } else {
                    res.status(401).json({
                        message: "The credentials are not correct",
                    });
                }
            } else {
                res.status(401).json({
                    message: "The credentials are not correct",
                });
            }
        } catch (error) {
            res.status(500).json({
                message: "Error checking user login",
                error,
            });
        }
    }

    public async logout(req: Request, res: Response) {
        Cookie.delete(["access_token", "id", "refresh_token"], res);

        res.status(200).send({ message: "Logout was made successfuly" });
    }
}

export default new UserController();
