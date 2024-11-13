// Libraries
import { Request, Response } from "express";

// Local
import operations from "../../services/database/operations.js";

// Models
import NotesPageDataModel from "../../models/notesPageData.js";
import ModuleModel from "../../models/module.js";
import PageModel from "../../models/page.js";

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
            const pages: any = await operations.query(query);

            res.status(200).json(pages[0][0]);
        } catch (error) {
            res.status(500).json({ error });
        }
    }

    public async setModule(req: Request, res: Response) {
        const { id } = req.params;

        try {
            // Gets the module id
            const moduleNotes = await ModuleModel.findAll({
                where: { name: "notes" },
            });

            if (!moduleNotes) {
                res.status(404).send({ error: "Module 'notes' not found" });
                return;
            }

            const moduleNotesId: number = moduleNotes[0].id;

            // Gets the page
            const page = await PageModel.findOne({
                where: { id: id },
            });

            if (!page) {
                res.status(404).send({ error: "Page not found" });
                return;
            }

            // Saves the new module id
            page.module_id = moduleNotesId;
            await page.save();

            // Creates the page data
            await NotesPageDataModel.create({
                page_id: page.id,
                content: "Where your imagination leaves you. . .",
            });

            res.status(201).send(page);
        } catch (error) {
            res.status(500).send({ error });
        }
    }
}

export default new NotesPageController();
