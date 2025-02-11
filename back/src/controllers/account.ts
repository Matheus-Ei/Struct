// Libraries
import { Request, Response } from 'express';

// Local
import Cookie from '../services/cookie';
import Token from '../services/token';
import Hash from '../services/hash';
import pool from '../services/database';

class AccountController {
  public async getCurrent(req: Request, res: Response) {
    const id = Cookie.get('id', req);
    const { nickname, email } = req.query;

    try {
      // Check if the account mail or nickname is avaliable
      if (nickname || email) {
        const query: string[] = [];
        if (email) query.push(email as string);
        if (nickname) query.push(nickname as string);

        const rawAccount = await pool.query(
          `
            SELECT id
            FROM account 
            WHERE nickname = ANY($1) OR email = ANY($1)
          `,
          [query],
        );
        const account = rawAccount.rows;

        if (account.length === 0) {
          res
            .status(200)
            .json({ message: 'Account not found', isAvailable: true });
          return;
        } else {
          res
            .status(200)
            .json({ message: 'Account found', isAvailable: false });
          return;
        }
      }

      if (!id) {
        res.status(400).json({ message: 'Missing id' });
        return;
      }

      const rawAccount = await pool.query(
        ` 
          SELECT *
          FROM account 
          WHERE id = $1
        `,
        [id],
      );
      const account = rawAccount.rows[0];

      if (account) {
        res.status(200).json({ message: 'Account found', data: account });
      } else {
        res.status(404).json({ message: 'Account not found' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error fetching the account', error });
    }
  }

  public async register(req: Request, res: Response) {
    const { full_name, nickname, email, password } = req.body;

    // Check if the fields are missing
    if (!full_name || !nickname || !email) {
      res.status(400).json({ message: 'Missing fields' });
      return;
    }

    await pool.query('BEGIN');

    try {
      // Generate the hash for the password
      const hashObj = new Hash();
      const hashPassword = await hashObj.make(password);

      const rawNewAccount = await pool.query(
        `
          INSERT INTO account (full_name, nickname, email, password)
          VALUES ($1, $2, $3, $4)
          RETURNING id
        `,
        [full_name, nickname, email, hashPassword],
      );

      const newAccount = rawNewAccount.rows[0];

      await pool.query(
        `INSERT INTO account_settings (account_id) VALUES ($1)`,
        [newAccount.id],
      );

      await pool.query(
        `INSERT INTO subscription (account_id, subscription_plan_id) VALUES ($1, 1)`,
        [newAccount.id],
      );

      // Generate the tokens and set them as cookies to make account logged in
      const refresh = new Token(process.env.REFRESH_SECRET as string);
      const access = new Token(process.env.JWT_SECRET as string);

      const accessTk = access.generate({ id: newAccount.id }, '1h');
      const refreshTk = refresh.generate({ id: newAccount.id }, '7d');

      Cookie.generate('access_token', accessTk, res);
      Cookie.generate('refresh_token', refreshTk, res);
      Cookie.generate('id', newAccount.id, res);

      await pool.query('COMMIT');
      res.status(201).json({ message: 'Account created' });
    } catch (error) {
      await pool.query('ROLLBACK');
      res.status(500).json({ message: 'Error creating the account', error });
    }
  }

  public async login(req: Request, res: Response) {
    const { email, password } = req.body;

    // Check if the fields are missing
    if (!email) {
      res.status(400).json({ message: 'Missing mail' });
      return;
    }

    try {
      const rawAccount = await pool.query(
        `
          SELECT *
          FROM account 
          WHERE email = $1
        `,
        [email],
      );
      const account = rawAccount.rows[0];

      const hashObj = new Hash();
      const isMatchPass = await hashObj.compare(password, account.password);

      if (!account || !isMatchPass) {
        res.status(401).json({ message: 'The credentials are not correct' });
        return;
      }

      // Generate the tokens
      const refresh = new Token(process.env.REFRESH_SECRET as string);
      const access = new Token(process.env.JWT_SECRET as string);

      const accessTk = access.generate({ id: account.id }, '1h');
      const refreshTk = refresh.generate({ id: account.id }, '7d');

      // Set the tokens as cookies to make account logged in
      Cookie.generate('access_token', accessTk, res);
      Cookie.generate('refresh_token', refreshTk, res);
      Cookie.generate('id', account.id, res);

      res.status(200).json({ message: 'The login was a success' });
    } catch (error) {
      res.status(500).json({ message: 'Error checking account login', error });
    }
  }

  public async logout(req: Request, res: Response) {
    Cookie.delete(['access_token', 'id', 'refresh_token'], res);

    res.status(200).send({ message: 'Logout was made successfuly' });
  }

  public async delete(req: Request, res: Response) {
    const id = Cookie.get('id', req);

    try {
      Cookie.delete(['access_token', 'id', 'refresh_token'], res);

      await pool.query(
        `
          DELETE FROM account
          WHERE id = $1
        `,
        [id],
      );

      res.status(200).send({ message: 'The account was deleted successfuly' });
    } catch (error) {
      res.status(500).send({ message: 'Error deleting the account', error });
    }
  }

  public async update(req: Request, res: Response) {
    const id = Cookie.get('id', req);

    if (!id) {
      res.status(400).json({ message: 'Missing id' });
      return;
    }

    try {
      const rawAccount = await pool.query(
        `
          SELECT *
          FROM account
          WHERE id = $1
        `,
        [id],
      );
      const account = rawAccount.rows[0];

      if (!account) {
        res.status(404).json({ message: 'Account not found' });
        return;
      }

      const {
        full_name = account.full_name,
        email = account.email,
        bio = account.bio,
        picture = account.picure,
      } = req.body;

      await pool.query(
        `
          UPDATE account
          SET full_name = $2, email = $3, bio = $4, picture = $5
          WHERE id = $1
        `,
        [id, full_name, email, bio, picture],
      );

      res.status(200).json({ message: 'Account updated' });
    } catch (error) {
      res.status(500).json({ message: 'Error updating the account', error });
    }
  }
}

export default new AccountController();
