// Local
import { GetPageType, GetPagesType, PageType } from "./types";
import { SuccessResponseType } from "types/global";
import Request from "modules/Request";

class Page {
    public static async get(id: number) {
        try {
            const response: GetPageType = await Request.get(`page/${id}`);
            return response.data;
        } catch {
            return null;
        }
    }

    public static async getAll(
        projectId: string | number | undefined | null
    ): Promise<PageType[] | null> {
        try {
            if (!projectId) return null;

            const response: GetPagesType = await Request.get(
                `project/${projectId}/pages`
            );
            return response.data;
        } catch {
            return null;
        }
    }

    public static async create(
        name: string,
        emoji: string | undefined | null,
        projectId: number,
        parentPage: number | null,
        onSuccess?: (response?: SuccessResponseType<PageType>) => void
    ) {
        try {
            const response = await Request.post("page", {
                name,
                emoji,
                description: "Page description...",
                projectId,
                parentPage,
            });
            onSuccess && onSuccess(response);

            return true;
        } catch {
            return false;
        }
    }

    public static async edit(
        id: number,
        name: string | undefined,
        description: string | undefined,
        emoji: string | undefined | null,
        onSuccess?: (response?: SuccessResponseType) => void
    ) {
        try {
            const response = await Request.patch(`page/${id}`, {
                name,
                description,
                emoji,
            });
            onSuccess && onSuccess(response);

            return true;
        } catch {
            return false;
        }
    }

    public static async delete(
        id: number,
        onSuccess?: (response?: SuccessResponseType) => void
    ) {
        try {
            const response = await Request.delete(`page/${id}`);
            onSuccess && onSuccess(response);

            return true;
        } catch {
            return false;
        }
    }

    public static async setModule(
        id: number,
        module: string,
        onSuccess?: (response?: SuccessResponseType) => void
    ) {
        try {
            const response = await Request.patch(`page/${id}/module`, {
                module,
            });
            onSuccess && onSuccess(response);

            return true;
        } catch {
            return false;
        }
    }
}

export default Page;
