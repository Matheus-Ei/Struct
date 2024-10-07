import { Request, Response } from "express";
import UserModel from "../models/user.js";

class UserController {
    public async get(req: Request, res: Response) {
        const { id } = req.params;

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

    public register(req: Request, res: Response) {

    }

    public login(req: Request, res: Response) {

    }

    public pay(req: Request, res: Response) {

    }

    public cancelSubscription(req: Request, res: Response) {

    }
}

export default new UserController();
