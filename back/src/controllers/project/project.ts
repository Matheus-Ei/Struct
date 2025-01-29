// Libraries
import { Request, Response } from "express";

// Local
import operations from "../../services/database/operations";
import Cookie from "../../services/cookie";

// Models
import ProjectModel from "../../models/project";

class ProjectController {
    public async get(req: Request, res: Response) {
        const { id } = req.params;

        try {
            const project = await operations.query(`
                SELECT project.id AS id,
	                project.title AS title,
	                project.description AS description,
	                owner_user_id,
                    COUNT(DISTINCT relationship_shared_project.id) AS number_shared,
                    COUNT(DISTINCT page.id) AS number_pages
                FROM project
                LEFT JOIN page ON project.id = page.project_id
                LEFT JOIN relationship_shared_project ON project.id = relationship_shared_project.project_id
                WHERE project.id = ${id}
                GROUP BY project.id;
            `);

            // Check if the project exists
            if (project[0].length === 0) {
                res.status(404).json({ message: "Project not found" });
                return;
            }

            res.status(200).json({
                message: "Project found",
                data: project[0][0],
            });
        } catch (error) {
            res.status(500).json({
                message: "Error fetching this project",
                error,
            });
        }
    }

    public async getAll(req: Request, res: Response) {
        const userId = Cookie.get("id", req);

        try {
            const projects = await ProjectModel.findAll({
                where: {
                    owner_user_id: userId,
                },
            });

            // Check if the projects were found
            if (projects) {
                res.status(200).json({
                    message: "Projects found",
                    data: projects,
                });
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

    public async create(req: Request, res: Response) {
        const ownerUserId = Cookie.get("id", req);
        const { title, description } = req.body;

        // Check if the title and description are present
        if (!title || !description) {
            res.status(400).json({ message: "Missing title or description" });
            return;
        }

        try {
            const project = await ProjectModel.create({
                title,
                description,
                owner_user_id: ownerUserId,
            });

            res.status(201).json({
                message: "Project created",
                data: {
                    id: project.id,
                    title: project.title,
                    description: project.description,
                    owner_user_id: project.owner_user_id,
                },
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

            // Check if the project exists
            if (!project) {
                res.status(404).json({
                    message: "Project not found, so not deleted",
                });
                return;
            }

            await project.destroy();
            res.status(200).json({ message: "Project deleted" });
            return;
        } catch (error) {
            res.status(500).json({
                message: "Error deleting the project",
                error,
            });
            return;
        }
    }

    public async edit(req: Request, res: Response) {
        const { id } = req.params;

        try {
            const project = await ProjectModel.findByPk(id);

            // Check if the project exists
            if (!project) {
                res.status(404).send({ message: "Project not found" });
                return;
            }

            const { title = project.title, description = project.description } =
                req.body;

            await project.update({
                title,
                description,
            });

            res.status(200).send({
                message: "Project updated",
                data: {
                    id: project.id,
                    title: project.title,
                    description: project.description,
                    owner_user_id: project.owner_user_id,
                },
            });
        } catch (error) {
            res.status(500).send({
                message: "Error updating the project",
                error,
            });
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

            res.status(200).send({
                messages: "Pages found",
                data: pages[0],
            });
            return;
        } catch (error) {
            res.status(500).send({
                message: "Error fetching the pages",
                error,
            });
            return;
        }
    }
}

export default new ProjectController();
