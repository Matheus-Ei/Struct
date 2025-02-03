// Local
import pool from '../../../services/database';

class NotesModule {
  public async get(id: string) {
    const response = await pool.query(
      `
        SELECT npd.content AS content
        FROM page
        JOIN note_page_data npd ON page.id = npd.page_id
        WHERE page.id = $1;
      `,
      [id],
    );

    return response.rows[0];
  }

  public async set(id: string) {
    try {
      const response = await pool.query(
        `
        INSERT INTO note_page_data(page_id, content)
        VALUES ($1, $2)
      `,
        [id, 'Where your imagination leaves you...'],
      );

      return response.rows[0];
    } catch (error) {
      throw new Error('Error creating the note page data');
    }
  }
}

export default new NotesModule();
