// Libraries
import { Request, Response } from "express";

// Models
import ModuleModel from "../../models/module";
import PageModel from "../../models/page";

// Local
import NotesModule from "./modules/notes.js";

class PageController {
    public async get(req: Request, res: Response) {
        const { id } = req.params;

        try {
            const page = await PageModel.findByPk(id);

            // Check if the page exists
            if (!page) {
                res.status(404).send({
                    message: "The page requested don't exist",
                });
                return;
            }

            const module = await ModuleModel.findByPk(page.module_id);

            let moduleInformation = null;
            switch (module?.name) {
                case "notes":
                    moduleInformation = await NotesModule.get(id);
                    break;
                default:
                    break;
            }

            res.status(200).send({
                message: "Page found",
                data: {
                    id: page.id,
                    name: page.name,
                    description: page.description,
                    emoji: page.emoji,
                    project_id: page.project_id,
                    parent_page_id: page.parent_page_id,
                    module: module ? module.name : null,
                    moduleInformation,
                },
            });
        } catch (error) {
            res.status(500).send({ message: "Error getting the page", error });
        }
    }

    public async delete(req: Request, res: Response) {
        const { id } = req.params;

        try {
            const page = await PageModel.findByPk(id);

            // Check if the page exists
            if (!page) {
                res.status(404).send({
                    message: "The page don't exist, so wasn't deleted",
                });
                return;
            }

            page.destroy();

            res.status(200).send({ message: "The page was deleted" });
        } catch (error) {
            res.status(500).send({ message: "Error deleting the page", error });
        }
    }

    public async children(req: Request, res: Response) {
        const { id } = req.params;

        try {
            const pages = await PageModel.findAll({
                where: {
                    parent_page_id: id,
                },
            });

            // Check if the page has children
            if (!pages) {
                res.status(404).send({
                    message: "No children pages found",
                    data: [],
                });
                return;
            }

            res.status(200).json({
                message: "Children pages found",
                data: pages,
            });
        } catch (error) {
            res.status(500).json({
                message: "Error fetching the children pages",
                error,
            });
        }
    }

    public async create(req: Request, res: Response) {
        const {
            name,
            description,
            projectId,
            emoji = undefined,
            parentPage = null,
            moduleId = null,
        } = req.body;

        // Check if the required fields are present
        if (!name || !description || !projectId) {
            res.status(400).send({
                message: "Missing name, description or project id",
            });
            return;
        }

        try {
            const page = await PageModel.create({
                name,
                description,
                emoji,
                project_id: projectId,
                module_id: moduleId,
                parent_page_id: parentPage,
            });

            res.status(201).send({
                message: "Page created",
                data: {
                    id: page.id,
                    name: page.name,
                    description: page.description,
                    emoji: page.emoji,
                    project_id: page.project_id,
                    parent_page_id: page.parent_page_id,
                },
            });
        } catch (error) {
            res.status(500).send({
                message: "Error creating the page",
                error,
            });
        }
    }

    public async edit(req: Request, res: Response) {
        const { id } = req.params;

        try {
            const page = await PageModel.findByPk(id);

            // Check if the page exists
            if (!page) {
                res.status(404).send({ message: "Page not found" });
                return;
            }

            const {
                name = page.name,
                description = page.description,
                emoji = page.emoji,
            } = req.body;

            page.update({
                name,
                description,
                emoji,
            });

            res.status(201).send({
                message: "Page updated",
                data: {
                    id: page.id,
                    name: page.name,
                    description: page.description,
                    emoji: page.emoji,
                    project_id: page.project_id,
                    parent_page_id: page.parent_page_id,
                },
            });
        } catch (error) {
            res.status(500).send({
                message: "Error updating the page",
                error,
            });
        }
    }

    public async setModule(req: Request, res: Response) {
        const { id } = req.params;
        const { module } = req.body;

        if (!module) {
            res.status(400).send({
                message: "Missing module",
            });
            return;
        }

        try {
            const page = await PageModel.findByPk(id);
            const moduleFound = await ModuleModel.findOne({
                where: {
                    name: module,
                },
            });

            // Check if the page exists
            if (!page || !moduleFound) {
                res.status(404).send({ message: "Page or module not found" });
                return;
            }

            switch (module) {
                case "notes":
                    NotesModule.set(id);
                    break;
                default:
                    res.status(400).send({
                        message: "Module not set",
                    });
                    return;
            }

            page.update({
                module_id: moduleFound.id,
            });

            res.status(201).send({
                message: "Module set",
            });
        } catch (error) {
            res.status(500).send({
                message: "Error updating the module",
                error,
            });
        }
    }
}

export default new PageController();
