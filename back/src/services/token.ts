// Libraries
import jwt from 'jsonwebtoken';

class Token {
  private key: string;

  constructor(key: string) {
    this.key = key;
  }

  public generate(payload: Object, expiresIn: string) {
    const options = {
      expiresIn,
    };

    const token = jwt.sign(payload, this.key, options);
    return token;
  }

  public verify(token: string, value: string, field: string) {
    try {
      const decoded: any = jwt.verify(token, this.key);
      const decValue: string = decoded[field];

      return decValue == value;
    } catch (error) {
      return false;
    }
  }
}

export default Token;
