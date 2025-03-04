// Local
import Request from 'modules/Request';
import Upload from 'services/upload';
import { AccountType } from './type';

class Account {
  static async login(email: string, password: string) {
    const response = await Request.post('account/auth', { email, password });

    return response;
  }

  static async refreshAccess() {
    try {
      await Request.get('token/refresh');

      return true;
    } catch {
      return false;
    }
  }

  static async verifyLogin() {
    try {
      await Request.get('token/check');
      return true;
    } catch {
      return false;
    }
  }

  static async logout() {
    try {
      await Request.delete('account/auth');

      return true;
    } catch {
      return false;
    }
  }

  static async delete() {
    try {
      await Request.delete('account');

      return true;
    } catch {
      return false;
    }
  }

  static async signUp(
    full_name: string | undefined,
    nickname: string | undefined,
    email: string | undefined,
    password: string | undefined,
  ) {
    const response = await Request.post('account', {
      full_name,
      nickname,
      password,
      email,
    });

    return response;
  }

  static async checkAvailability(nickname?: string, email?: string) {
    try {
      if (nickname) {
        const response = await Request.get('account?nickname=' + nickname);
        return response.isAvailable;
      }

      if (email) {
        const response = await Request.get('account?email=' + email);
        return response.isAvailable;
      }

      return false;
    } catch {
      return false;
    }
  }

  static async get(): Promise<AccountType | null> {
    try {
      const response = await Request.get('account');
      const pictureData = await Upload.get(response.data.picture);

      const userWithPic = { ...response.data, pictureData };
      return userWithPic;
    } catch {
      return null;
    }
  }

  static async update(
    full_name: string | undefined,
    bio: string | undefined,
    email: string | undefined,
  ) {
    try {
      await Request.patch('account', { full_name, bio, email });
      return true;
    } catch {
      return false;
    }
  }

  static async changePicture(picture: File) {
    try {
      const fileName = await Upload.make(picture);
      await Request.patch('account', { picture: fileName });

      return true;
    } catch {
      return false;
    }
  }
}

export default Account;
