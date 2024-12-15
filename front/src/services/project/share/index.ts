// Local
import Request from "modules/Request";
import { idType } from "types/global";

class ProjectShare {
    public static async add(id: idType, nickname: string, permission: string) {
        try {
            const response = await Request.post(`project/share/${id}`, {
                nickname,
                permission,
            });

            return response;
        } catch {
            return false;
        }
    }

    public static async get(id: idType) {
        try {
            const response = await Request.get(`project/share/${id}`);
            return response.data;
        } catch (error: any) {
            if (error.response?.status === 404) return null;
            return null;
        }
    }

    public static async delete(id: idType, nickname: string) {
        try {
            const response = await Request.delete(
                `project/share/${id}/${nickname}`
            );
            return response;
        } catch {
            return false;
        }
    }
}

export default ProjectShare;
