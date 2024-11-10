import { Request, Response } from "express";
import PageModel from "../../models/page.js";
import ModuleModel from "../../models/module.js";

class PageGeralController {
    public async getPage(req: Request, res: Response) {
        const { id } = req.params;

        try {
            const page = await PageModel.findByPk(id);
            const module = await ModuleModel.findByPk(page?.module_id);

            if (!page) {
                res.status(404).send({
                    message: "The page requested don't exist",
                });
                return;
            }
            const returnInfo = {
                id: page.id,
                name: page.name,
                description: page.description,
                emoji: page.emoji,
                project_id: page.project_id,
                parent_page_id: page.parent_page_id,
                module: module ? module.name : null,
            };

            res.status(200).send(returnInfo);
        } catch (error) {
            res.status(500).send({ message: "Error getting the page", error });
        }
    }

    public async delete(req: Request, res: Response) {
        const { id } = req.params;

        try {
            const page = await PageModel.findByPk(id);

            if (!page) {
                res.status(404).send({
                    message: "The page don't exist, so don's deleted",
                });
                return;
            }

            page.destroy();

            res.status(200).send({ message: "The page was deleted" });
        } catch (error) {
            res.status(500).send({ message: "Error deleting the page", error });
        }
    }

    public async getChildren(req: Request, res: Response) {
        const { id } = req.params;

        try {
            const pages = await PageModel.findAll({
                where: {
                    parent_page_id: id,
                },
            });

            res.status(200).json(pages);
        } catch (error) {
            res.status(500).json({ error });
        }
    }

    public async create(req: Request, res: Response) {
        const {
            name,
            description,
            projectId,
            parentPage = null,
            moduleId = null,
        } = req.body;

        try {
            const page = await PageModel.create({
                name,
                description,
                project_id: projectId,
                module_id: moduleId,
                parent_page_id: parentPage,
            });

            res.status(201).send(page);
        } catch (error) {
            res.status(500).send({ error });
        }
    }

    public async edit(req: Request, res: Response) {
        const { id } = req.params;

        try {
            const page = await PageModel.findByPk(id);

            if (!page) {
                res.status(404).send({ message: "Page not found" });
                return;
            }
            const {
                name = page.name,
                description = page.description,
                emoji = page.emoji,
            } = req.body;

            page.name = name;
            page.description = description;
            page.emoji = emoji;

            page.save();

            res.status(201).send(page);
        } catch (error) {
            res.status(500).send({ error });
        }
    }
}

export default new PageGeralController();
