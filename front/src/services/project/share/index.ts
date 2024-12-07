// Local
import Request from "modules/Request";

class ProjectShare {
    public static async add(
        id: string | undefined,
        nickname: string,
        permission: string,
        onSuccess?: () => void
    ) {
        try {
            await Request.post(`project/share/${id}`, { nickname, permission });
            onSuccess && onSuccess();

            return true;
        } catch {
            return false;
        }
    }

    public static async get(id: string | undefined) {
        try {
            const response = await Request.get(`project/share/${id}`);
            return response.data;
        } catch {
            return null;
        }
    }

    public static async delete(id: string | undefined, nickname: string) {
        try {
            await Request.delete(`project/share/${id}/${nickname}`);
            return true;
        } catch {
            return false;
        }
    }
}

export default ProjectShare;
