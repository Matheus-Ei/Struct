import axios from "axios";

class Request {
    static async get(url: string) {
        const data: string = await axios.get(url);
        const treatedData: Object = await JSON.parse(data);
        return treatedData;
    }

    static async post(url: string, data: Object) {
        const result: string = await axios.post(url, JSON.stringify(data));
        const treatedResult: Object = await JSON.parse(result);
        return treatedResult;
    }
}

export default Request;
