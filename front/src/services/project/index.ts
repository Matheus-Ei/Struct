// Local
import Request from "modules/Request";

class Project {
    public static async get(id: number | undefined) {
        try {
            const response = await Request.get(`project/${id}`);
            return response.data;
        } catch {
            return null;
        }
    }

    public static async getAll() {
        try {
            const response = await Request.get("project");
            return response.data;
        } catch {
            return null;
        }
    }

    public static async create(
        title: string,
        description: string,
        onSuccess?: () => void
    ) {
        try {
            await Request.post("project", {
                title,
                description,
            });
            onSuccess && onSuccess();

            return true;
        } catch {
            return false;
        }
    }

    public static async edit(
        id: number | undefined,
        title: string | undefined,
        description: string | undefined,
        onSuccess?: () => void
    ) {
        try {
            await Request.patch(`project/${id}`, {
                title,
                description,
            });
            onSuccess && onSuccess();

            return true;
        } catch {
            return false;
        }
    }

    public static async delete(id: number | undefined, onSuccess?: () => void) {
        try {
            await Request.delete(`project/${id}`);
            onSuccess && onSuccess();

            return true;
        } catch {
            return false;
        }
    }
}

export default Project;
