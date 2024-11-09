import Request from "services/Request";
import { ReactProjectContext } from "./types";
import { PagesRequestType } from "./types";

const removePageById = (
    rootPages: PagesRequestType[],
    targetPageId: number
): PagesRequestType[] => {
    function removePage(page: PagesRequestType): boolean {
        if (page.id === targetPageId) {
            return true;
        }

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

    const rootIndexToRemove = rootPages.findIndex((page) => removePage(page));
    if (rootIndexToRemove !== -1) {
        rootPages.splice(rootIndexToRemove, 1);
    }

    return rootPages;
};

export const addPage = (
    context: ReactProjectContext,
    toggleShowChildren: ((value: boolean) => void) | null,
    pageId: number | null
) => {
    if (!pageId && !context) {
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
            context.refetchMenuTabs();
        });
};

export const deletePage = async (
    toggleShowMenu: (value: boolean) => void | null,
    pageId: number,
    context: ReactProjectContext
) => {
    if (!pageId && !context) {
        return null;
    }

    toggleShowMenu && toggleShowMenu(false);
    await Request.delete(`page/geral/${pageId}`);

    if (pageId === context.selectedPageId) {
        context.setSelectedPageId(null);
    }

    // Updates the list on menu
    const prevMenuTabs = context.menuTabs;
    if (!prevMenuTabs) {
        return;
    }

    const newPages = removePageById(prevMenuTabs, pageId);
    context.setMenuTabs(newPages);
};
