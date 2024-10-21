// Libraries
import { Request, Response } from "express";

// Services
import Cookie from "../services/cookie";

// Services
import operations from "../services/database/operations";

// Models
import ProjectModel from "../models/project";
import RelationshipProjectModuleModel from "../models/relationshipProjectModule";

class ProjectController {
    public async get(req: Request, res: Response) {
        const { id } = req.params;

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
                 WHERE project.id = ${id}
                 GROUP BY project.id;`
            );

            if (projects) {
                res.status(200).json(projects[0][0]);
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

    public async getAll(req: Request, res: Response) {
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

    public async create(req: Request, res: Response) {
        const { title, description, type, modules } = req.body;
        const ownerUserId = Cookie.get("id", req);

        try {
            const rawTypeId: any = await operations.query(`
                SELECT id
                FROM project_type
                WHERE name='${type}';
            `);
            const typeId: number = rawTypeId[0][0].id;

            if (!typeId) {
                res.status(500).json({
                    message: "The type passed don't exist",
                });
                return;
            }

            const rawModulesId: any = await operations.query(`
                    SELECT id
                    FROM module
                    WHERE name IN (${modules.map((item: any) => `'${item}'`)});
                `);
            const modulesId = rawModulesId[0];

            if (modulesId.length === 0) {
                res.status(500).json({
                    message: "The modules passed don't exist",
                });
                return;
            }

            const project = await ProjectModel.create({
                title,
                description,
                project_type_id: typeId,
                owner_user_id: ownerUserId,
            });

            await modulesId.map(async (moduleId: { id: number }) => {
                return await RelationshipProjectModuleModel.create({
                    module_id: moduleId.id,
                    project_id: project.id,
                });
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
}

export default new ProjectController();
