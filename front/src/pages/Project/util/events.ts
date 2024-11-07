import Request from "services/Request";
import { ReactProjectContext } from "./types";

export const addPage = (
    context: ReactProjectContext,
    toggleShowChildren: ((value: boolean) => void) | null,
    pageId: number | null
) => {
    if (!context) {
        return null;
    }

    const defaultData = {
        name: "New page",
        description: "Page description...",
        projectId: context.projectId,
        parentPage: pageId,
    };

    Request.post("page/geral/create", defaultData)
        .then((response) => {
            context.setSelectedPageId(response.id);
            toggleShowChildren && toggleShowChildren(true);
        })
        .finally(() => {
            context.refetch();
        });
};

export const deletePage = async (
    toggleShowMenu: (value: boolean) => void | null,
    pageId: number,
    context: ReactProjectContext
) => {
    if (!context) {
        return null;
    }

    toggleShowMenu && toggleShowMenu(false);
    await Request.delete(`page/geral/${pageId}`);
    context.refetch();
};
