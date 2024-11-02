import { Request, Response } from "express";
import operations from "../../services/database/operations";
import NotesPageDataModel from "../../models/notesPageData";
import PageModel from "../../models/page";
import ModuleModel from "../../models/module";

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

    public async create(req: Request, res: Response) {
        const { projectId, name, description } = req.body;

        try {
            const moduleNotes = await ModuleModel.findAll({
                where: { name: "notes" },
            });
            const moduleNotesId: number = moduleNotes[0].id;

            const page = await PageModel.create({
                name,
                description,
                project_id: projectId,
                module_id: moduleNotesId,
            });

            await NotesPageDataModel.create({
                page_id: page.id,
                content: "Where your imagination leaves you. . .",
            });

            res.status(201).send(page);
        } catch (error) {
            res.status(500).send({ error });
        }
    }

    public async update(req: Request, res: Response) {}
}

export default new NotesPageController();
