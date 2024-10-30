import axios from "axios";

class Request {
    static async get(route: string, base?: string) {
        const backendBase = process.env.REACT_APP_BACK_URL as string;
        const baseUrl = base ? base : backendBase;
        const url = `${baseUrl}/${route}`;

        try {
            const request = await axios.get(url, { withCredentials: true });
            const data = await request.data;
            return data;
        } catch (error) {
            console.error(error);
            return false;
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
            console.error(error);
            return false;
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
            console.error(error);
            return false;
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
            console.error(error);
            return false;
        }
    }
}

export default Request;
