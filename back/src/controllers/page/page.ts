// Libraries
import { Request, Response } from 'express';

// Local
import NotesModule from './modules/notes';
import pool from '../../services/database';

class PageController {
  public async get(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const rawPage = await pool.query(
        `
          SELECT
            p.id as id,
            p.title AS title,
            p.description AS description,
            p.emoji AS emoji,
            p.project_id AS project_id,
            p.parent_page_id AS parent_page_id,
            m.title AS module
          FROM page p
          JOIN module m ON p.module_id = m.id
          WHERE p.id = $1;
        `,
        [id],
      );
      const page = rawPage.rows[0];

      // Check if the page exists
      if (!page) {
        res.status(404).send({
          message: "The page requested don't exist",
        });
        return;
      }

      let module = null;
      switch (page.module) {
        case 'notes':
          module = await NotesModule.get(id);
          break;
        default:
          break;
      }

      res.status(200).send({
        message: 'Page found',
        data: {
          id: page.id,
          name: page.name,
          description: page.description,
          emoji: page.emoji,
          project_id: page.project_id,
          parent_page_id: page.parent_page_id,

          module_title: page.module,
          module_information: module,
        },
      });
    } catch (error) {
      res.status(500).send({ message: 'Error getting the page', error });
    }
  }

  public async delete(req: Request, res: Response) {
    const { id } = req.params;

    try {
      await pool.query(
        `
          DELETE FROM page
          WHERE id = $1
        `,
        [id],
      );

      res.status(200).send({ message: 'The page was deleted' });
    } catch (error) {
      res.status(500).send({ message: 'Error deleting the page', error });
    }
  }

  public async create(req: Request, res: Response) {
    const {
      title,
      description,
      projectId,
      emoji = undefined,
      parentPage = null,
      moduleId = null,
    } = req.body;

    // Check if the required fields are present
    if (!title || !description || !projectId) {
      res
        .status(400)
        .send({ message: 'Missing name, description or project id' });
      return;
    }

    try {
      await pool.query(
        `
          INSERT INTO page (title, description, emoji, project_id, module_id, parent_page_id)
          VALUES ($1, $2, $3, $4, $5, $6);
        `,
        [title, description, emoji, projectId, moduleId, parentPage],
      );

      res.status(201).send({ message: 'Page created' });
    } catch (error) {
      res.status(500).send({ message: 'Error creating the page', error });
    }
  }

  public async edit(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const rawPage = await pool.query(
        `
          SELECT title, description, emoji
          FROM page
          WHERE id = $1;
        `,
        [id],
      );
      const page = rawPage.rows[0];

      // Check if the page exists
      if (!page) {
        res.status(404).send({ message: 'Page not found' });
        return;
      }

      const {
        title = page.title,
        description = page.description,
        emoji = page.emoji,
      } = req.body;

      await pool.query(
        `
          UPDATE page
          SET title = $2,
              description = $3,
              emoji = $4
          WHERE id = $1
        `,
        [id, title, description, emoji],
      );

      res.status(201).send({ message: 'Page updated' });
    } catch (error) {
      res.status(500).send({ message: 'Error updating the page', error });
    }
  }

  public async setModule(req: Request, res: Response) {
    const { id } = req.params;
    const { module } = req.body;

    if (!module) {
      res.status(400).send({
        message: 'Missing module',
      });
      return;
    }

    try {
      const rawModule = await pool.query(
        `
        SELECT id
        FROM module
        WHERE title = $1;
      `,
        [module],
      );

      const moduleFound = rawModule.rows[0];

      // Check if the page exists
      if (!moduleFound) {
        res.status(404).send({ message: 'Page or module not found' });
        return;
      }

      switch (module) {
        case 'notes':
          NotesModule.set(id);
          break;
        default:
          res.status(400).send({ message: 'Module not set' });
          return;
      }

      await pool.query(
        `
        UPDATE page
        SET module_id = $2
        WHERE id = $1
      `,
        [id, moduleFound.id],
      );
      res.status(201).send({ message: 'Module set' });
    } catch (error) {
      res.status(500).send({ message: 'Error updating the module', error });
    }
  }
}

export default new PageController();
