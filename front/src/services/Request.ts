// Libraries
import axios from "axios";

class Request {
    static async get(url: string) {
        try {
            const request = await axios.get(url, { withCredentials: true });
            const data = await request.data;
            return data;
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    static async post(url: string, data: Object) {
        try {
            const request = await axios.post(url, data, {
                withCredentials: true,
            });
            const response = await request.data;
            return response;
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    static async delete(url: string) {
        try {
            const request = await axios.delete(url, {
                withCredentials: true,
            });
            const response = await request.data;
            return response;
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    static async put(url: string, data: Object) {
        try {
            const request = await axios.put(url, data, {
                withCredentials: true,
            });
            const response = await request.data;
            return response;
        } catch (error) {
            console.log(error);
            return false;
        }
    }
}

export default Request;
