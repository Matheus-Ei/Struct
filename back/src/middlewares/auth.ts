// Libraries
import { Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';

// Local
import Cookie from '../services/cookie';
import { AccessToken, RefreshToken } from '../services/token';

dotenv.config();

const autorizedPaths = [
  '/account',
  '/account/auth',
  '/token/check',
  '/token/refresh',
];

const auth = (req: Request, res: Response, next: NextFunction) => {
  if (autorizedPaths.includes(req.path)) {
    return next();
  }

  const refreshToken = Cookie.get('refresh_token', req);
  const id = Cookie.get('id', req);

  if (!refreshToken || !id) {
    return res.status(401).json({ message: 'Missing tokens or id cookies' });
  }

  const isAccessValid = AccessToken.verify(id, res, req);
  const isRefreshValid = RefreshToken.verify(id, res, req);

  if (!isAccessValid) {
    if (isRefreshValid) {
      AccessToken.generate(id, res);
    } else return res.status(401).json({ message: 'Invalid token' });
  }

  next();
};

export default auth;
