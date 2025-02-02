// Libraries
import { Request, Response } from 'express';

// Local
import Cookie from '../../services/cookie';
import pool from '../../services/database';

class ProjectController {
  public async get(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const rawProject = await pool.query(
        `
        SELECT 
          pj.id AS id,
	        pj.title AS title,
	        pj.description AS description,
          COUNT(DISTINCT sp.id) AS number_shared,
          COUNT(DISTINCT pg.id) AS number_pages
        FROM project pj
        LEFT JOIN page pg ON pj.id = pg.project_id
        LEFT JOIN shared_project sp ON pj.id = sp.project_id
        WHERE pj.id = $1
        GROUP BY pj.id;
      `,
        [id],
      );

      const project = rawProject.rows[0];

      // Check if the project exists
      if (!project) {
        res.status(404).json({ message: 'Project not found' });
        return;
      }

      res.status(200).json({ message: 'Project found', data: project });
    } catch (error) {
      res.status(500).json({ message: 'Error fetching this project', error });
    }
  }

  public async getAll(req: Request, res: Response) {
    const accountId = Cookie.get('id', req);

    try {
      const rawProjects = await pool.query(
        `
          SELECT *
          FROM project
          WHERE owner_account_id = $1
        `,
        [accountId],
      );
      const projects = rawProjects.rows;

      res.status(200).json({
        message: 'Here are all projects for this account',
        data: projects,
      });
    } catch (error) {
      res.status(500).json({
        message: 'Error fetching the projects',
        error,
      });
    }
  }

  public async create(req: Request, res: Response) {
    const ownerAccountId = Cookie.get('id', req);
    const { title, description } = req.body;

    // Check if the title and description are present
    if (!title || !description) {
      res.status(400).json({ message: 'Missing title or description' });
      return;
    }

    try {
      await pool.query(
        `
        WITH new_project AS (
          INSERT INTO project (title, description, owner_account_id) 
          VALUES ($1, $2, $3)
          RETURNING id
        )

        INSERT INTO project_settings (project_id) 
        SELECT id FROM new_project;
      `,
        [title, description, ownerAccountId],
      );

      res.status(201).json({ message: 'Project created' });

      return;
    } catch (error) {
      res.status(500).json({ message: 'Error creating the project', error });

      return;
    }
  }

  public async delete(req: Request, res: Response) {
    const { id } = req.params;

    try {
      await pool.query(
        `
          DELETE FROM project
          WHERE id = $1
        `,
        [id],
      );

      res.status(200).json({ message: 'Project deleted' });
    } catch (error) {
      res.status(500).json({ message: 'Error deleting the project', error });
    }
  }

  public async edit(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const rawProject = await pool.query(
        `
          SELECT title, description 
          FROM project 
          WHERE id = $1
        `,
        [id],
      );
      const project = rawProject.rows[0];

      // Check if the project exists
      if (!project) {
        res.status(404).send({ message: 'Project not found' });
        return;
      }

      const { title = project.title, description = project.description } =
        req.body;

      await pool.query(
        `
          UPDATE project
          SET title = $1,
              description = $2
          WHERE id = $3
        `,
        [title, description, id],
      );

      res.status(200).send({ message: 'Project updated' });
    } catch (error) {
      res.status(500).send({ message: 'Error updating the project', error });
    }
  }

  public async getPages(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const rawPages = await pool.query(
        `
          SELECT 
            id,
            title,
            emoji,
            description,
            position,
			      parent_page_id,
            get_child(id) AS child_pages
          FROM page
          WHERE project_id = $1 AND parent_page_id IS NULL
          ORDER BY position, id;
        `,
        [id],
      );

      const pages = rawPages.rows;

      res.status(200).send({
        messages: 'Pages found',
        data: pages,
      });
      return;
    } catch (error) {
      res.status(500).send({
        message: 'Error fetching the pages',
        error,
      });
      return;
    }
  }
}

export default new ProjectController();
