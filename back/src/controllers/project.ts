import { Request, Response } from "express";
import Cookie from "../services/cookie.js";
import operations from "../services/database/operations.js";
import ProjectModel from "../models/project.js";

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
                WITH RECURSIVE page_hierarchy AS (
                    SELECT 
                        page.id,
                        page.name,
                        page.emoji,
                        page.description,
                        page.order,
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
                        child.order,
                        child.parent_page_id
                    FROM page AS child
                    JOIN page_hierarchy AS parent ON child.parent_page_id = parent.id
                )
                SELECT 
                    root.id,
                    root.name,
                    root.emoji,
                    root.description,
                    root.order,
                    get_children(root.id) AS children_pages
                FROM project
                JOIN page AS root ON root.project_id = project.id
                WHERE project.id = ${id}
                    AND root.parent_page_id IS NULL
                GROUP BY root.id
                ORDER BY root.order, root.id;
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
