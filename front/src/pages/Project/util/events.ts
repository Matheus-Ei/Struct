// Local
import { ProjectContextType } from "./types";
import Page from "services/page";

export const addPage = async (
    projectContext: ProjectContextType,
    toggleShowChildren: ((value: boolean) => void) | null,
    pageId: number | null
) => {
    if (!pageId && !projectContext) return null;

    await Page.create(
        "New page",
        undefined,
        Number(projectContext.projectId),
        pageId,
        (response) => {
            projectContext.selectedPage.set(response?.data?.id || null);
            toggleShowChildren && toggleShowChildren(true);
            projectContext.menu.refetch();
        }
    );
};

export const deletePage = async (
    toggleShowMenu: (value: boolean) => void | null,
    pageId: number,
    projectContext: ProjectContextType
) => {
    if (!pageId && !projectContext) return null;

    toggleShowMenu && toggleShowMenu(false);
    await Page.delete(pageId, () => {});

    // Remove page from menu
    setTimeout(() => {
        if (pageId === projectContext.selectedPage.id)
            projectContext.selectedPage.set(null);
        projectContext.menu.refetch();
    }, 10);
};
