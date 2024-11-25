// Libraries
import { Request, Response } from "express";

// Models
import RequestService from "../../services/request.js";
import UserModel from "../../models/user.js";

class UserProviderController {
    public async google(req: Request, res: Response) {
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

export default new UserProviderController();
