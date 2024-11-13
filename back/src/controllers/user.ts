import { Request, Response } from "express";
import Cookie from "../services/cookie.js";
import Token from "../services/token.js";
import Hash from "../services/hash.js";
import operations from "../services/database/operations.js";
import UserModel from "../models/user.js";
import SettingsModel from "../models/settings.js";
import SubscriptionModel from "../models/subscription.js";
import RequestService from "../services/request.js";

class UserController {
    public async get(req: Request, res: Response) {
        const id = Cookie.get("id", req);

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

    public async getProjects(req: Request, res: Response) {
        const userId = Cookie.get("id", req);

        try {
            const projects = await operations.query(
                `SELECT id,
	                    title,
	                    description
                 FROM project
                 WHERE owner_user_id = ${userId};`
            );

            if (projects) {
                res.status(200).json(projects[0]);
            } else {
                res.status(404).json({
                    message: "No projects for this user were found",
                });
            }
        } catch (error) {
            res.status(500).json({
                message: "Error fetching the projects",
                error,
            });
        }
    }

    public async nicknameIsAvalaible(req: Request, res: Response) {
        const { nickname } = req.body;

        try {
            const user = await UserModel.findOne({
                where: {
                    nickname,
                },
            });

            if (user) {
                res.status(200).json({ isAvailable: false });
            } else {
                res.status(200).json({ isAvailable: true });
            }
        } catch (error) {
            res.status(500).json({ message: "Error checking nickname", error });
        }
    }

    public async mailIsAvalaible(req: Request, res: Response) {
        const { mail } = req.body;

        try {
            const user = await UserModel.findOne({
                where: {
                    mail,
                },
            });

            if (user) {
                res.status(200).json({ isAvailable: false });
            } else {
                res.status(200).json({ isAvailable: true });
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

            const refresh = new Token(process.env.REFRESH_SECRET as string);
            const access = new Token(process.env.JWT_SECRET as string);

            // Generate the tokens and set them as cookies to make user logged in
            if (newUser) {
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

            res.status(201).json({ newUser });
        } catch (error) {
            res.status(500).json({ message: "Error creating the user", error });
        }
    }

    public async login(req: Request, res: Response) {
        const { mail, password = " ", autenticator = "Default" } = req.body;

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
                        message:
                            "You aren't authorized to login with these credentials",
                    });
                    return;
                }

                if (isMatchPass || autenticator === "Auth") {
                    // Generate the tokens
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

                    // Set the tokens as cookies to make user logged in
                    Cookie.generate("access_token", accessTk, res);
                    Cookie.generate("refresh_token", refreshTk, res);
                    Cookie.generate("id", user?.dataValues.id, res);

                    res.status(201).json({
                        message: "The login was a success",
                        status: true,
                    });
                } else {
                    res.status(401).json({
                        message:
                            "You aren'n authorized to login with these credentials",
                        status: false,
                    });
                }
            } else {
                res.status(401).json({
                    message:
                        "You aren'n authorized to login with these credentials",
                    status: false,
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
                const user = await UserModel.findOne({
                    where: {
                        nickname,
                    },
                });

                if (user) {
                    i++;
                    nicknameExists = true;
                    nickname = `${nickname}${i}`;
                } else {
                    nicknameExists = false;
                }
            }

            res.status(200).send({
                mail: userData.email,
                name: userData.name,
                photo: userData.picture,
                verified: userData.verified_email,
                autenticator: "Google",
                nickname,
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
