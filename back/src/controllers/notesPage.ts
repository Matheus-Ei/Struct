import { Request, Response } from "express";
import operations from "../services/database/operations";
import PageDataModel from "../models/pageData";
import NotesPageDataModel from "../models/notesPageData";
import PageModel from "../models/page";

class NotesPageController {
    public async get(req: Request, res: Response) {
        const { id } = req.params;

        const query = `
            SELECT 
                page.id,
                page_data.name,
                page_data.description,
                notes_page_data.content AS content,
                module.name AS name
            FROM page
            JOIN page_data ON page.page_data_id = page_data.id
            JOIN notes_page_data ON page_data.id = notes_page_data.page_data_id
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
            const pageData = await PageDataModel.create({ name, description });
            const pageDataId: number = pageData.id;

            await NotesPageDataModel.create({
                page_data_id: pageDataId,
                content: "Where your imagination leaves you. . .",
            });

            const moduleNotes: any = await operations.query(`
                SELECT id
                FROM module
                WHERE name='notes';
        `);
            const moduleNotesId: number = moduleNotes[0][0].id;

            const page = await PageModel.create({
                page_data_id: pageDataId,
                project_id: projectId,
                module_id: moduleNotesId,
            });

            res.status(201).send(page);
        } catch (error) {
            res.status(500).send({ error });
        }
    }

    public async update(req: Request, res: Response) {}

    public async delete(req: Request, res: Response) {}
}

export default new NotesPageController();
