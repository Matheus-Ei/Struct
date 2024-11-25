import Request from "modules/Request";
import { GetPageType, GetPagesType, PageType } from "./types";

class Page {
    public static async get(id: number) {
        try {
            const response: GetPageType = await Request.get(`page/${id}`);
            return response.data;
        } catch {
            return null;
        }
    }

    public static async getAll(projectId: number) {
        try {
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
        emoji: string | undefined,
        projectId: number,
        parentPage: number | null,
        onSuccess: (response?: any) => void
    ) {
        try {
            const response = await Request.post("page", {
                name,
                emoji,
                description: "Page description...",
                projectId,
                parentPage,
            });
            onSuccess(response);

            return true;
        } catch {
            return false;
        }
    }

    public static async edit(
        id: number,
        name: string | undefined,
        description: string | undefined,
        emoji: string | undefined,
        onSuccess: (response?: any) => void
    ) {
        try {
            const response = await Request.patch(`page/${id}`, {
                name,
                description,
                emoji,
            });
            onSuccess(response);

            return true;
        } catch {
            return false;
        }
    }

    public static removeById(
        rootPages: PagesType[],
        targetPageId: number
    ): PagesType[] {
        function removePage(page: PagesType): boolean {
            if (page.id === targetPageId) return true;

            if (page.children_pages) {
                const indexToRemove = page.children_pages.findIndex((child) =>
                    removePage(child)
                );

                if (indexToRemove !== -1) {
                    page.children_pages.splice(indexToRemove, 1);
                    return false;
                }
            }

            return false;
        }

        const rootIndexToRemove = rootPages.findIndex((page) =>
            removePage(page)
        );
        if (rootIndexToRemove !== -1) rootPages.splice(rootIndexToRemove, 1);

        return rootPages;
    }

    public static async delete(
        id: number,
        onSuccess: (response?: any) => void
    ) {
        try {
            const response = await Request.delete(`page/${id}`);
            onSuccess(response);

            return true;
        } catch {
            return false;
        }
    }
}

export default Page;
