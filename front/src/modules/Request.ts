// Libraries
import axios, { ResponseType } from 'axios';

class Request {
  static async get(
    route: string,
    base?: string,
    responseType: ResponseType = 'json',
  ) {
    const backendBase = process.env.REACT_APP_BACK_URL as string;
    const baseUrl = base ? base : backendBase;
    const url = `${baseUrl}/${route}`;

    try {
      const request = await axios.get(url, {
        withCredentials: true,
        responseType,
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

  static async postFile(route: string, file: File, base?: string) {
    const backendBase = process.env.REACT_APP_BACK_URL as string;
    const baseUrl = base ? base : backendBase;
    const url = `${baseUrl}/${route}`;

    try {
      const formData = new FormData();
      formData.append('file', file);

      const request = await axios.post(url, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        withCredentials: true,
      });
      return request.data;
    } catch (error) {
      throw new Error(`Post file method, url ${url}, error: ${error}`);
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

  static async put(route: string, data?: Object, base?: string) {
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

  static async patch(route: string, data?: Object, base?: string) {
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
