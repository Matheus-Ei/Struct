// Libraries
import { Request, Response } from "express";

// Local
import operations from "../../../services/database/operations.js";

// Models
import NotesPageDataModel from "../../../models/notesPageData.js";
import ModuleModel from "../../../models/module.js";
import PageModel from "../../../models/page.js";

class NotesPageController {
    public async get(req: Request, res: Response) {
        const { id } = req.params;

        const query = `
            SELECT 
                page.id,
                page.name,
                page.emoji as emoji,
                page.description,
                page.parent_page_id AS parent,
                notes_page_data.content AS content,
                module.name AS module
            FROM page
            JOIN notes_page_data ON page.id = notes_page_data.page_id
            JOIN module ON page.module_id = module.id
            WHERE page.id = ${id};
        `;

        try {
            const page = await operations.query(query);

            // Check if the page exists
            if (page[0].length === 0) {
                res.status(404).json({ message: "Page not found" });
                return;
            }

            res.status(200).json({
                message: "Page found",
                data: page[0][0],
            });
        } catch (error) {
            res.status(500).json({
                message: "Error getting the page",
                error,
            });
        }
    }

    public async set(req: Request, res: Response) {
        const { id } = req.params;

        try {
            const module = await ModuleModel.findOne({
                where: { name: "notes" },
            });

            // Check if the module exists
            if (!module) {
                res.status(404).send({ error: "Module 'notes' not found" });
                return;
            }

            const page = await PageModel.findOne({
                where: { id },
            });

            // Check if the page exists
            if (!page) {
                res.status(404).send({ error: "Page not found" });
                return;
            }

            // Saves the new module id
            page.module_id = module.id;
            await page.save();

            // Creates the page data
            const notesPage = await NotesPageDataModel.create({
                page_id: page.id,
                content: "Where your imagination leaves you. . .",
            });

            res.status(201).send({
                message: "Page set as notes",
                data: {
                    id: page.id,
                    name: page.name,
                    description: page.description,
                    emoji: page.emoji,
                    module: module.name,
                    content: notesPage.content,
                },
            });
        } catch (error) {
            res.status(500).send({
                message: "Error setting the page as notes",
                error,
            });
        }
    }
}

export default new NotesPageController();
