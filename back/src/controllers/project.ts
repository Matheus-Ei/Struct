import { Request, Response } from "express";
import Cookie from "../services/cookie";
import operations from "../services/database/operations";
import ProjectModel from "../models/project";
import PageModel from "../models/page";

class ProjectController {
    public async get(req: Request, res: Response) {
        const { id } = req.params;

        try {
            const project = await ProjectModel.findByPk(id);

            if (project) {
                res.status(200).json(project);
            } else {
                res.status(404).json({
                    message: "No projects were found with this id",
                });
            }
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

        try {
        } catch (error) {}
    }

    public async getPages(req: Request, res: Response) {
        const { id } = req.params;

        try {
            const pages = await operations.query(`
                SELECT 
	                page.id AS id,
	                page.name AS name,
                    page.emoji as emoji,
	                page.description AS description,
                    page.parent_page_id AS parent_page_id,
                    module.name AS module
                FROM project
                JOIN page ON page.project_id = project.id
                JOIN module ON page.module_id = module.id
                where project.id = ${id};
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
        } catch (error) {}
    }
}

export default new ProjectController();
