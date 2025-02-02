// Local
import pool from '../../../services/database';

class NotesModule {
  public async get(id: string) {
    const response = await pool.query(
      `
        SELECT npd.content AS content
        FROM page
        JOIN note_page_data npd ON page.id = npd.page_id
        WHERE page.id = 1;
      `,
      [id],
    );

    return response.rows[0];
  }

  public async set(id: string) {
    return await pool.query(
      `
        INSERT INTO note_page_data(page_id, content)
        VALUE ($1, $2);
      `,
      [id, 'Where your imagination leaves you...'],
    );
  }
}

export default new NotesModule();
