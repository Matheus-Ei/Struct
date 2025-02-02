// Libraries
import { Request, Response } from 'express';
import dotenv from 'dotenv';

// Local
import Token from '../services/token';
import Cookie from '../services/cookie';

dotenv.config();

class TokenController {
  public async refresh(req: Request, res: Response) {
    const accessObject = new Token(process.env.JWT_SECRET as string);
    const refreshObject = new Token(process.env.REFRESH_SECRET as string);

    try {
      // Get cookies
      const id = Cookie.get('id', req);
      const refreshToken = Cookie.get('refresh_token', req);

      // Verify the refresh token
      const refreshIsValid = refreshObject.verify(refreshToken, id, 'id');
      if (!refreshIsValid) {
        res.status(401).json({
          message: "The refresh token isn't valid",
        });

        return;
      }

      // Generate a new access token
      const accessTk = accessObject.generate({ id }, '1h');
      Cookie.generate('access_token', accessTk, res);

      res.status(201).json({
        message: 'Access token was generated successfuly',
      });

      return;
    } catch (error) {
      res.status(500).json({
        message: 'Error refreshing the token',
        error,
      });

      return;
    }
  }

  public async check(req: Request, res: Response) {
    const accessObject = new Token(process.env.JWT_SECRET as string);

    // Get cookies
    const id = Cookie.get('id', req);
    const accessToken = Cookie.get('access_token', req);

    // Verify the access token
    const accessIsValid = accessObject.verify(accessToken, id, 'id');
    if (!accessIsValid) {
      res.status(401).json({
        login: false,
        message: "The access token isn't valid",
      });

      return;
    } else {
      res.status(200).json({
        login: true,
        message: 'The access token is valid',
      });

      return;
    }
  }
}

export default new TokenController();
