// Libraries
import { Request, Response } from "express";

// Local
import Cookie from "../services/cookie.js";
import Token from "../services/token.js";
import Hash from "../services/hash.js";

// Models
import SubscriptionModel from "../models/subscription.js";
import RequestService from "../services/request.js";
import SettingsModel from "../models/settings.js";
import UserModel from "../models/user.js";

class UserController {
    public async get(req: Request, res: Response) {
        const id = Cookie.get("id", req);

        try {
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
            res.status(500).json({ message: "Error fetching user", error });
        }
    }

    public async nicknameIsAvalaible(req: Request, res: Response) {
        const { nickname } = req.body;

        // Check if the nickname is missing
        if (!nickname) {
            res.status(400).json({ message: "Missing nickname" });
            return;
        }

        try {
            const user = await UserModel.findOne({
                where: {
                    nickname,
                },
            });

            if (user) {
                res.status(200).json({
                    message: "The nickname is not avalaible",
                    isAvailable: false,
                });
            } else {
                res.status(200).json({
                    message: "The nickname is avalaible",
                    isAvailable: true,
                });
            }
        } catch (error) {
            res.status(500).json({ message: "Error checking nickname", error });
        }
    }

    public async mailIsAvalaible(req: Request, res: Response) {
        const { mail } = req.body;

        // Check if the mail is missing
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

            if (user) {
                res.status(200).json({
                    message: "The mail is not avalaible",
                    isAvailable: false,
                });
            } else {
                res.status(200).json({
                    message: "The mail is avalaible",
                    isAvailable: true,
                });
            }
        } catch (error) {
            res.status(500).json({ message: "Error checking mail", error });
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
            photo = "",
        } = req.body;

        // Check if the fields are missing
        if (!name || !nickname || !mail) {
            res.status(400).json({ message: "Missing fields" });
            return;
        }

        // Generate the hash for the password
        const hashObj = new Hash();
        const hashPassword = await hashObj.make(password);

        try {
            const userSettings = await SettingsModel.create({
                language: "pt-br",
                country: "Brazil",
            });

            const userSubscription = await SubscriptionModel.create({
                last_paid: Date.now(),
                subscription_plan_id: 1,
            });

            const newUser = await UserModel.create({
                name,
                nickname,
                mail,
                verified,
                autenticator,
                photo,
                password: hashPassword,
                subscription_id: userSubscription.id,
                settings_id: userSettings.id,
            });

            // Generate the tokens and set them as cookies to make user logged in
            if (newUser) {
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
            }

            res.status(201).json({
                message: "User created",
                status: true,
                data: {
                    id: newUser.dataValues.id,
                    name: newUser.dataValues.name,
                    nickname: newUser.dataValues.nickname,
                    mail: newUser.dataValues.mail,
                    verified: newUser.dataValues.verified,
                    autenticator: newUser.dataValues.autenticator,
                    photo: newUser.dataValues,
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

    public async pay(req: Request, res: Response) {}

    public async cancelSubscription(req: Request, res: Response) {}

    public async logout(req: Request, res: Response) {
        Cookie.delete(["access_token", "id", "refresh_token"], res);

        res.status(200).send({ message: "Logout was made successfuly" });
    }

    public async delete(req: Request, res: Response) {}

    public async authGoogle(req: Request, res: Response) {
        const { access_token } = req.body;

        // Check if the access_token is missing
        if (!access_token) {
            res.status(400).send({ message: "Missing access_token" });
            return;
        }

        try {
            const userData = await RequestService.get(
                `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${access_token}`
            );

            // Create a unique nickname
            let nickname = userData.name.split(" ")[0].toLowerCase();
            let nicknameExists = true;
            let i = 0;
            while (nicknameExists) {
                const checkNickname = i === 0 ? nickname : `${nickname}${i}`;

                const user = await UserModel.findOne({
                    where: {
                        nickname: checkNickname,
                    },
                });

                if (user) {
                    i++;
                    nicknameExists = true;
                } else {
                    nickname = checkNickname;
                    nicknameExists = false;
                }
            }

            res.status(200).send({
                message: "User authenticated with Google",
                data: {
                    name: userData.name,
                    nickname,
                    mail: userData.email,
                    photo: userData.picture,
                    verified: userData.verified_email,
                    autenticator: "Google",
                },
            });
        } catch (error) {
            res.status(500).send({
                message: "Error authenticating with Google",
                error,
            });
        }
    }
}

export default new UserController();
