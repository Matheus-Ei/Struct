// Libraries
import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import Cookie from './cookie';

dotenv.config();

class Token {
  public static generate(payload: Object, expiresIn: string, key: any) {
    const options = {
      expiresIn,
    };

    const token = jwt.sign(payload, key as string, options);
    return token;
  }

  public static verify(token: string, value: string, field: string, key: any) {
    try {
      const decoded: any = jwt.verify(token, key as string);
      const decValue: string = decoded[field];

      return decValue == value;
    } catch (error) {
      return false;
    }
  }
}

export class AccessToken {
  public static secret = process.env.ACCESS_SECRET;
  public static token = 'access_token';

  public static generate(userId: string, res: Response) {
    const token = Token.generate({ id: userId }, '1h', this.secret);
    Cookie.generate(this.token, token, res);

    return token;
  }

  public static verify(userId: string, res: Response, req: Request) {
    const isValid = Token.verify(
      Cookie.get(this.token, req),
      userId,
      'id',
      this.secret,
    );

    return isValid;
  }
}

export class RefreshToken {
  public static secret = process.env.REFRESH_SECRET;
  public static token = 'refresh_token';

  public static generate(userId: string, res: Response) {
    const token = Token.generate({ id: userId }, '30d', this.secret);
    Cookie.generate(this.token, token, res);

    return token;
  }

  public static verify(userId: string, res: Response, req: Request) {
    return Token.verify(Cookie.get(this.token, req), userId, 'id', this.secret);
  }
}

export default Token;
