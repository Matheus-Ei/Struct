// Libraries
import { Request, Response } from "express";

// Local
import operations from "../services/database/operations.js";
import Cookie from "../services/cookie.js";

// Models
import ProjectModel from "../models/project.js";

class ProjectController {
    public async get(req: Request, res: Response) {
        const { id } = req.params;

        try {
            const project = await operations.query(`
                SELECT project.id AS id,
	                project.title AS title,
	                project.description AS description,
	                owner_user_id,
	                COUNT(relationship_shared_project) AS number_shared,
	                COUNT(page) AS number_pages
                FROM project
                LEFT JOIN page ON project.id = page.project_id
                LEFT JOIN relationship_shared_project ON project.id = relationship_shared_project.project_id
                WHERE project.id = ${id}
                GROUP BY project.id;
            `);

            if (project[0].length === 0) {
                res.status(404).json({ message: "Project not found" });
                return;
            }

            res.status(200).json(project[0][0]);
        } catch (error) {
            res.status(500).json({
                message: "Error fetching this project",
                error,
            });
        }
    }

    public async create(req: Request, res: Response) {
        const { title, description } = req.body;
        const ownerUserId = Cookie.get("id", req);

        try {
            const project = await ProjectModel.create({
                title,
                description,

                owner_user_id: ownerUserId,
            });

            res.status(201).json({
                message: "Project created",
                id: project.id,
            });

            return;
        } catch (error) {
            res.status(500).json({
                message: "Error creating the project",
                error,
            });

            return;
        }
    }

    public async delete(req: Request, res: Response) {
        const { id } = req.params;

        try {
            const project = await ProjectModel.findByPk(id);

            if (!project) {
                res.status(404).json({ message: "Project not found" });
                return;
            }

            await project.destroy();
            res.status(200).json({ message: "Project deleted" });
            return;
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Error deleting the project" });
            return;
        }
    }

    public async edit(req: Request, res: Response) {
        const { id } = req.params;

        const project = await ProjectModel.findByPk(id);

        if (!project) {
            res.status(404).send({ message: "Project not found" });
            return;
        }

        const { title = project.title, description = project.description } =
            req.body;

        try {
            await project.update({
                title,
                description,
            });

            res.status(200).send({ message: "Project updated", project });
        } catch (error) {
            res.status(500).send({ message: "Error updating the project" });
        }
    }

    public async getPages(req: Request, res: Response) {
        const { id } = req.params;

        try {
            const pages = await operations.query(`
                WITH RECURSIVE page_hierarchy AS (
                    SELECT 
                        page.id,
                        page.name,
                        page.emoji,
                        page.description,
                        page.position,
                        page.parent_page_id
                    FROM page
                    WHERE project_id = ${id}
                        AND parent_page_id IS NULL
                
                    UNION ALL
                
                    SELECT 
                        child.id,
                        child.name,
                        child.emoji,
                        child.description,
                        child.position,
                        child.parent_page_id
                    FROM page AS child
                    JOIN page_hierarchy AS parent ON child.parent_page_id = parent.id
                )
                SELECT 
                    root.id,
                    root.name,
                    root.emoji,
                    root.description,
                    root.position,
                    get_children(root.id) AS children_pages
                FROM project
                JOIN page AS root ON root.project_id = project.id
                WHERE project.id = ${id}
                    AND root.parent_page_id IS NULL
                GROUP BY root.id
                ORDER BY root.position, root.id;
            `);

            res.status(200).send(pages[0]);
            return;
        } catch (error) {
            res.status(500).send(error);
            return;
        }
    }

    public async getShared(req: Request, res: Response) {
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

            res.status(200).send(response[0]);
        } catch (error) {
            res.status(500).send({
                message: "Error fetching shared users",
                error,
            });
        }
    }

    public async share(req: Request, res: Response) {
        const { id } = req.params;
        const { userId, permissionLevelId } = req.body;

        try {
            const project = await ProjectModel.findByPk(id);

            if (!project) {
                res.status(404).json({ message: "Project not found" });
                return;
            }

            await operations.query(`
                INSERT INTO relationship_shared_project (project_id, user_shared_id, permission_level_id)
                VALUES (${id}, ${userId}, ${permissionLevelId});
            `);

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

export default new ProjectController();
