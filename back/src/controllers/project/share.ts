// Libraries
import { Request, Response } from 'express';

// Local
import pool from '../../services/database';

class ShareController {
  public async get(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const rawShares = await pool.query(
        `
          WITH shares AS (
            SELECT 
              sp.project_id AS project_id,
	            r.id AS role_id,
	            r.name AS role_name,
	            r.description AS role_description,
	            a.id AS account_id,
	            a.full_name AS account_full_name,
	            a.nickname AS account_nickname,
	            a.email AS account_email,
	            a.picture AS account_picture
            FROM shared_project sp
            LEFT JOIN role r ON sp.role_id = r.id
            LEFT JOIN account a ON sp.account_id = a.id
            WHERE sp.project_id = $1
          )

          SELECT * FROM shares;
        `,
        [id],
      );
      const shares = rawShares.rows;

      res.status(200).send({
        message: 'Shared users found',
        data: shares,
      });
    } catch (error) {
      res.status(500).send({
        message: 'Error fetching the shared users',
        error,
      });
    }
  }

  public async share(req: Request, res: Response) {
    const { id } = req.params;
    const { nickname, role } = req.body;

    // Check if the nickname and role are present
    if (!nickname || !role) {
      res.status(400).json({ message: 'Missing nickname or role' });
      return;
    }

    try {
      await pool.query(
        `
          WITH cte_account AS (
            SELECT id
            FROM account
            WHERE nickname = $2
          ),
          cte_role AS (
            SELECT id
            FROM role
            WHERE name = $3
          )

          INSERT INTO shared_project (project_id, account_id, role_id)
          VALUES ($1, (SELECT id FROM cte_account), (SELECT id FROM cte_role));
        `,
        [id, nickname, role],
      );

      res.status(201).json({ message: 'Project shared' });
      return;
    } catch (error) {
      res.status(500).json({ message: 'Error sharing the project', error });

      return;
    }
  }

  public async unshare(req: Request, res: Response) {
    const { id, nickname } = req.params;

    // Check if the nickname is present
    if (!nickname) {
      res.status(400).json({ message: 'Missing nickname' });
      return;
    }

    try {
      await pool.query(
        `
          WITH cte_account AS (
            SELECT id
            FROM account
            WHERE nickname = $2
          )

          DELETE FROM shared_project
          WHERE project_id = $1 
            AND account_id = (SELECT id FROM cte_account);
        `,
        [id, nickname],
      );

      res.status(200).json({ message: 'User removed from the project' });
    } catch (error) {
      res.status(500).json({ message: 'Error unsharing the project', error });
    }
  }
}

export default new ShareController();
