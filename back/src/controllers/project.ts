// Libraries
import { Request, Response } from "express";

// Services
import Cookie from "../services/cookie.js";

// Services
import operations from "../services/database/operations.js";

class ProjectController {
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

    public async create() {}

    public async delete() {}

    public async edit() {}
}

export default new ProjectController();
