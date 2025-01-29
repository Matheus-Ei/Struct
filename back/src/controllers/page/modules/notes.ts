// Local
import operations from "../../../services/database/operations";

// Models
import NotesPageDataModel from "../../../models/notesPageData";

class NotesModule {
    public async get(id: string) {
        const query = `
            SELECT 
                notes_page_data.content AS content
            FROM page
            JOIN notes_page_data ON page.id = notes_page_data.page_id
            WHERE page.id = ${id};
        `;

        const response = await operations.query(query);
        return response[0][0];
    }

    public async set(id: string) {
        return await NotesPageDataModel.create({
            page_id: id,
            content: "Where your imagination leaves you. . .",
        });
    }
}

export default new NotesModule();
