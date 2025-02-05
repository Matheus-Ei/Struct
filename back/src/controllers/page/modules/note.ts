// Local
import { Request, Response } from 'express';
import pool from '../../../services/database';

class NoteModule {
  public async get(id: string) {
    const response = await pool.query(
      `
        SELECT 
          id, 
          content,
          metadata,
          position,
          type
        FROM note_page_data nt
        JOIN note_node nd ON nd.page_id = nt.page_id
        WHERE nt.page_id = $1
        ORDER BY position;
      `,
      [id],
    );

    return response.rows;
  }

  public async set(id: string) {
    try {
      const response = await pool.query(
        `
        INSERT INTO note_page_data(page_id)
        VALUES ($1)
      `,
        [id],
      );

      return response.rows[0];
    } catch (error) {
      console.error(error);
    }
  }

  public async newNode(req: Request, res: Response) {
    const { pageId, position } = req.body;

    if (pageId === undefined || position === undefined) {
      res
        .status(400)
        .send({ message: 'Missing required field pageId or position' });
      return;
    }

    try {
      const rawNewNode = await pool.query(
        `
          INSERT INTO note_node (content, position, type, page_id)
          VALUES (' ', $1, 'paragraph', $2)
          RETURNING id;
        `,
        [position, pageId],
      );

      res.status(201).send({
        message: 'New node created',
        data: { id: rawNewNode.rows[0].id },
      });
    } catch (error) {
      res.status(500).send({ message: 'Error adding a new node', error });
    }
  }

  public async deleteNode(req: Request, res: Response) {
    const { nodeId } = req.params;

    if (!nodeId) {
      res.status(400).send({ message: 'Missing required field nodeId' });
      return;
    }

    try {
      await pool.query(
        `
          DELETE FROM note_node
          WHERE id = $1
        `,
        [nodeId],
      );

      res.status(200).send({ message: 'Node deleted' });
    } catch (error) {
      res.status(500).send({ message: 'Error deleting the node', error });
    }
  }

  public async updateNode(req: Request, res: Response) {
    const { nodeId } = req.params;

    try {
      const rawCurrentValues = await pool.query(
        `
          SELECT content, metadata, type, position
          FROM note_node
          WHERE id = $1
        `,
        [nodeId],
      );
      const currentValues = rawCurrentValues.rows[0];

      const {
        content = currentValues.content,
        position = currentValues.position,
        metadata = currentValues.metadata,
        type = currentValues.type,
      } = req.body;

      await pool.query(
        `
          UPDATE note_node
          SET 
            content = $2,
            position = $3,
            metadata = $4,
            type = $5
          WHERE id = $1
        `,
        [nodeId, content, position, metadata, type],
      );

      res.status(200).send({ message: 'Node updated' });
    } catch (error) {
      res.status(500).send({ message: 'Error updating the node', error });
    }
  }
}

export default new NoteModule();
