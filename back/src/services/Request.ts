import axios from "axios";

class Request {
    static async get(url: string) {
        const request = await axios.get(url);
        const data = await request.data;
        return data;
    }

    static async post(url: string, data: Object) {
        const request = await axios.post(url, data);
        const response = await request.data;
        return response;
    }
}

export default Request;

