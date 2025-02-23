// Libraries
import { Request, Response } from 'express';
import dotenv from 'dotenv';

// Local
import Token from '../services/token';
import Cookie from '../services/cookie';

dotenv.config();

class TokenController {
  public async refresh(req: Request, res: Response) {
    try {
      // Get cookies
      const id = Cookie.get('id', req);
      const refreshToken = Cookie.get('refresh_token', req);

      // Verify the refresh token
      const refreshIsValid = Token.verify(
        refreshToken,
        id,
        'id',
        process.env.REFRESH_SECRET,
      );
      if (!refreshIsValid) {
        res.status(401).json({
          message: "The refresh token isn't valid",
        });

        return;
      }

      // Generate a new access token
      const accessTk = Token.generate({ id }, '1h', process.env.ACCESS_SECRET);
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
    // Get cookies
    const id = Cookie.get('id', req);
    const accessToken = Cookie.get('access_token', req);

    // Verify the access token
    const accessIsValid = Token.verify(
      accessToken,
      id,
      'id',
      process.env.ACCESS_SECRET,
    );
    if (!accessIsValid) {
      res.status(401).send({
        login: false,
        message: "The access token isn't valid",
      });

      return;
    } else {
      res.status(200).send({
        login: true,
        message: 'The access token is valid',
      });

      return;
    }
  }
}

export default new TokenController();
