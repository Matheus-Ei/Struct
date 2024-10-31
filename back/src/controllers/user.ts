import { Request, Response } from "express";
import Cookie from "../services/cookie";
import Token from "../services/token";
import Hash from "../services/hash";
import operations from "../services/database/operations";
import UserModel from "../models/user";
import SettingsModel from "../models/settings";
import SubscriptionModel from "../models/subscription";

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
                `SELECT project.id AS id,
	                    project.title AS title,
	                    project.description AS description,
	                    MAX(INITCAP(project_type.name)) as type,
	                    ARRAY_AGG(INITCAP(module.name)) AS module
                 FROM relationship_project_module
                 JOIN project ON relationship_project_module.project_id = project.id
                 JOIN module ON relationship_project_module.module_id = module.id
                 JOIN project_type ON project.project_type_id = project_type.id
                 WHERE owner_user_id = ${userId}
                 GROUP BY project.id;`
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

    public async register(req: Request, res: Response) {
        const { name, nickname, mail, password } = req.body;

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
                password: hashPassword,
                subscription_id: userSubscription.id,
                settings_id: userSettings.id,
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
        res.clearCookie("access_token");
        res.clearCookie("refresh_token");
        res.clearCookie("id");

        res.status(200).send({ message: "Logout was made successfuly" });
    }

    public async delete(req: Request, res: Response) {}
}

export default new UserController();
