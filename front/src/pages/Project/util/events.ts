// Local
import { ProjectContextType } from "./../context";
import Page from "services/page";

export const addPage = async (
    projectContext: ProjectContextType,
    toggleShowChildren: ((value: boolean) => void) | null,
    pageId: number | null
) => {
    if (!pageId && !projectContext) return null;

    const response = await Page.create(
        "New page",
        undefined,
        Number(projectContext.projectId),
        pageId
    );

    projectContext.selectedPage.set(response?.data?.id || null);
    toggleShowChildren && toggleShowChildren(true);
    projectContext.menu.refetch();
};

export const deletePage = async (
    toggleShowMenu: (value: boolean) => void | null,
    pageId: number,
    projectContext: ProjectContextType
) => {
    if (!pageId && !projectContext) return null;

    toggleShowMenu && toggleShowMenu(false);
    await Page.delete(pageId);

    // Update the menu
    projectContext.menu.refetch();
    if (pageId === projectContext.selectedPage.id)
        projectContext.selectedPage.set(null);
};
