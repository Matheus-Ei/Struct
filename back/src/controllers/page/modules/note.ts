// Local
import { Request, Response } from 'express';
import pool from '../../../services/database';

class NoteModule {
  public async get(id: string) {
    const response = await pool.query(
      `
        WITH RECURSIVE ordered_nodes AS (
            SELECT 
                nd.id, 
                nd.content,
                nd.metadata,
                nd.next_id,
                nd.type,
                1 AS order_position
            FROM note_node nd
            WHERE nd.page_id = $1 
              AND nd.id NOT IN (SELECT next_id FROM note_node WHERE page_id = $1 AND next_id IS NOT NULL)
        
            UNION ALL
        
            SELECT 
                nn.id, 
                nn.content,
                nn.metadata,
                nn.next_id,
                nn.type,
                onodes.order_position + 1
            FROM note_node nn
            INNER JOIN ordered_nodes onodes ON nn.id = onodes.next_id
            WHERE nn.page_id = $1
        )
        
        SELECT 
            id, 
            content,
            metadata,
            next_id,
            type
        FROM ordered_nodes
        ORDER BY order_position;
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
    const { pageId, prevNodeId = null } = req.body;

    if (pageId === undefined) {
      res.status(400).send({ message: 'Missing required field pageId' });
      return;
    }

    try {
      const rawNewNode = await pool.query(
        `
          INSERT INTO note_node (content, type, page_id, next_id)
          VALUES (' ', 'paragraph', $1, (SELECT next_id FROM note_node WHERE id = $2))
          RETURNING id;
        `,
        [pageId, prevNodeId],
      );
      const newNode = rawNewNode.rows[0];

      await pool.query(
        `
          UPDATE note_node
          SET next_id = $1
          WHERE id = $3 AND page_id = $2
        `,
        [newNode.id, pageId, prevNodeId],
      );

      res.status(201).send({
        message: 'New node created',
        data: { id: newNode.id },
      });
    } catch (error) {
      res.status(500).send({ message: 'Error adding a new node', error });
    }
  }

  public async deleteNode(req: Request, res: Response) {
    const { nodeId } = req.params;

    try {
      // Set the next_id of the previous node to the next node after the deleted node
      await pool.query(
        `
          UPDATE note_node
          SET next_id = (
            SELECT next_id
            FROM note_node
            WHERE id = $1
          )
          WHERE id = (SELECT id FROM note_node WHERE next_id = $1)
        `,
        [nodeId],
      );

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
          SELECT content, metadata, type
          FROM note_node
          WHERE id = $1
        `,
        [nodeId],
      );
      const currentValues = rawCurrentValues.rows[0];

      const {
        content = currentValues.content,
        metadata = currentValues.metadata,
        type = currentValues.type,
      } = req.body;

      await pool.query(
        `
          UPDATE note_node
          SET 
            content = $2,
            metadata = $3,
            type = $4
          WHERE id = $1
        `,
        [nodeId, content, metadata, type],
      );

      res.status(200).send({ message: 'Node updated' });
    } catch (error) {
      res.status(500).send({ message: 'Error updating the node', error });
    }
  }

  public async moveNode(req: Request, res: Response) {
    const { nodeId, arrivalPrevNodeId } = req.params;

    try {
      // Remove the node from the original position
      await pool.query(
        `
          UPDATE note_node
          SET next_id = (
            SELECT next_id 
            FROM note_node 
            WHERE id = $1
          )
          WHERE id = (SELECT id FROM note_node WHERE next_id = $1)
        `,
        [nodeId],
      );

      // Sets the next_id of the node to the new position
      await pool.query(
        `

          UPDATE note_node
          SET next_id = (
            SELECT next_id
            FROM note_node
            WHERE id = $2
          )
          WHERE id = $1
        `,
        [nodeId, arrivalPrevNodeId],
      );

      // Sets the next_id of the prev node on the new position to the current node
      await pool.query(
        `
          UPDATE note_node
          SET next_id = $2
          WHERE id = $1
        `,
        [arrivalPrevNodeId, nodeId],
      );

      res.status(200).send({ message: 'Node updated' });
    } catch (error) {
      res.status(500).send({ message: 'Error updating the node', error });
    }
  }
}

export default new NoteModule();
