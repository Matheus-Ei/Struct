// Libraries
import { NavigateFunction } from 'react-router-dom';

// Local
import Request from 'modules/Request';

class Account {
  static async login(
    email: string,
    password: string,
    navigate: NavigateFunction,
  ) {
    try {
      await Request.post('account/auth', { email, password });

      navigate('/dashboard');

      return true;
    } catch {
      return false;
    }
  }

  static async refreshAccess() {
    try {
      await Request.get('token/refresh');

      return true;
    } catch {
      return false;
    }
  }

  static async verifyLogin(navigate: NavigateFunction) {
    try {
      await Request.get('token/check');
      return true;
    } catch {
      const isRefreshed = await Account.refreshAccess();

      if (!isRefreshed) {
        navigate('/login');
        return false;
      }

      return true;
    }
  }

  static async logout(navigate: NavigateFunction) {
    try {
      await Request.delete('account/auth');

      navigate('/');
      return true;
    } catch {
      return false;
    }
  }

  static async signUp(
    full_name: string,
    nickname: string,
    email: string,
    password: string | undefined,
    navigate: NavigateFunction,
  ) {
    try {
      await Request.post('account', {
        full_name,
        nickname,
        password,
        email,
      });

      navigate('/dashboard');
      return true;
    } catch {
      return false;
    }
  }

  static async checkAvailability(nickname?: string, email?: string) {
    try {
      if (nickname) {
        const response = await Request.get('account?nickname=' + nickname);
        return response.isAvailable;
      }

      if (email) {
        const response = await Request.get('account?mail=' + email);
        return response.isAvailable;
      }

      return false;
    } catch {
      return false;
    }
  }

  static async get() {
    try {
      const response = await Request.get('account');
      return response.data;
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
}

export default Account;
