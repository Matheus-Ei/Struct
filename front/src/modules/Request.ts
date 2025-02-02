// Libraries
import axios from 'axios';

class Request {
  static async get(route: string, base?: string) {
    const backendBase = process.env.REACT_APP_BACK_URL as string;
    const baseUrl = base ? base : backendBase;
    const url = `${baseUrl}/${route}`;

    try {
      const request = await axios.get(url, {
        withCredentials: true,
      });
      const data = await request.data;
      return data;
    } catch (error) {
      throw new Error(`Get method, url ${url}, error: ${error}`);
    }
  }

  static async post(route: string, data: Object, base?: string) {
    const backendBase = process.env.REACT_APP_BACK_URL as string;
    const baseUrl = base ? base : backendBase;
    const url = `${baseUrl}/${route}`;

    try {
      const request = await axios.post(url, data, {
        withCredentials: true,
      });
      const response = await request.data;
      return response;
    } catch (error) {
      throw new Error(`Post method, url ${url}, error: ${error}`);
    }
  }

  static async delete(route: string, base?: string) {
    const backendBase = process.env.REACT_APP_BACK_URL as string;
    const baseUrl = base ? base : backendBase;
    const url = `${baseUrl}/${route}`;

    try {
      const request = await axios.delete(url, {
        withCredentials: true,
      });
      const response = await request.data;
      return response;
    } catch (error) {
      throw new Error(`Delete method, url ${url}, error: ${error}`);
    }
  }

  static async put(route: string, data: Object, base?: string) {
    const backendBase = process.env.REACT_APP_BACK_URL as string;
    const baseUrl = base ? base : backendBase;
    const url = `${baseUrl}/${route}`;

    try {
      const request = await axios.put(url, data, {
        withCredentials: true,
      });
      const response = await request.data;
      return response;
    } catch (error) {
      throw new Error(`Put method, url ${url}, error: ${error}`);
    }
  }

  static async patch(route: string, data: Object, base?: string) {
    const backendBase = process.env.REACT_APP_BACK_URL as string;
    const baseUrl = base ? base : backendBase;
    const url = `${baseUrl}/${route}`;

    try {
      const request = await axios.patch(url, data, {
        withCredentials: true,
      });
      const response = await request.data;
      return response;
    } catch (error) {
      throw new Error(`Patch method, url ${url}, error: ${error}`);
    }
  }
}

export default Request;
