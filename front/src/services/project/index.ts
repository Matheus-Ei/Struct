import Request from "modules/Request";

class Project {
    public static async get(id: number) {
        try {
            const response = await Request.get(`project/get/${id}`);
            return response;
        } catch {
            return null;
        }
    }

    public static async getAll() {
        try {
            const response = await Request.get("user/projects");
            return response;
        } catch {
            return null;
        }
    }

    public static async create(
        title: string,
        description: string,
        onSuccess: () => void
    ) {
        try {
            await Request.post("project/create", {
                title,
                description,
            });
            onSuccess();

            return true;
        } catch {
            return false;
        }
    }

    public static async edit(
        id: number,
        title: string | undefined,
        description: string | undefined,
        onSuccess: () => void
    ) {
        try {
            await Request.patch(`project/edit/${id}`, {
                title,
                description,
            });
            onSuccess();

            return true;
        } catch {
            return false;
        }
    }

    public static async delete(id: number, onSuccess: () => void) {
        try {
            await Request.delete(`project/delete/${id}`);
            onSuccess();

            return true;
        } catch {
            return false;
        }
    }

    public static async share(
        id: number,
        nickname: string,
        permission: string,
        onSuccess: () => void
    ) {
        try {
            await Request.post(`project/share/${id}`, { nickname, permission });
            onSuccess();

            return true;
        } catch {
            return false;
        }
    }

    public static async getUsers(id: number) {
        try {
            const response = await Request.get(`project/users/${id}`);
            return response;
        } catch {
            return null;
        }
    }
}

export default Project;
