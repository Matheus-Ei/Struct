// Libraries
import { Request, Response } from "express";

// Local
import operations from "../../services/database/operations.js";

// Models
import RelationshipSharedProject from "../../models/relationshipSharedProject.js";
import PermissionLevelModel from "../../models/permissionLevel.js";
import ProjectModel from "../../models/project.js";
import UserModel from "../../models/user.js";

class ShareController {
    public async get(req: Request, res: Response) {
        const { id } = req.params;

        try {
            const response = await operations.query(`
                SELECT relationship_shared_project.project_id as project_id,
	                permission_level_id,
	                permission_level.name,
	                permission_level.description,
	                users.id as user_id,
	                users.name as user_name,
	                users.nickname as user_nickname,
	                users.mail as user_mail,
	                users.photo as user_photo
                FROM relationship_shared_project
                JOIN permission_level ON relationship_shared_project.permission_level_id = permission_level.id
                JOIN users ON relationship_shared_project.user_shared_id = users.id
                WHERE relationship_shared_project.project_id = ${id};
            `);

            // Check if the project exists and has shared users
            if (response[0].length === 0) {
                res.status(404).json({
                    message: "No shared users found",
                    data: [],
                });
                return;
            }

            res.status(200).send({
                message: "Shared users found",
                data: response[0],
            });
        } catch (error) {
            res.status(500).send({
                message: "Error fetching shared users",
                error,
            });
        }
    }

    public async share(req: Request, res: Response) {
        const { id } = req.params;
        const { nickname, permission } = req.body;

        // Check if the nickname and permission are present
        if (!nickname || !permission) {
            res.status(400).json({ message: "Missing nickname or permission" });
            return;
        }

        try {
            const project = await ProjectModel.findByPk(id);
            const user = await UserModel.findOne({
                where: { nickname },
            });

            const permissionLevel = await PermissionLevelModel.findOne({
                where: { name: permission },
            });

            // Check if the project, user and permission level exist
            if (!project || !user || !permissionLevel || !permissionLevel) {
                res.status(404).json({
                    message: "Project, user or permission level not found",
                });
                return;
            }

            // Check if the user is already shared
            const shared = await RelationshipSharedProject.findOne({
                where: {
                    project_id: id,
                    user_shared_id: user.id,
                },
            });
            if (shared) {
                res.status(400).json({ message: "User already shared" });
                return;
            }

            RelationshipSharedProject.create({
                project_id: id,
                user_shared_id: user.id,
                permission_level_id: permissionLevel.id,
            });

            res.status(201).json({ message: "User shared" });
            return;
        } catch (error) {
            res.status(500).json({
                message: "Error sharing the project",
                error,
            });

            return;
        }
    }
}

export default new ShareController();
