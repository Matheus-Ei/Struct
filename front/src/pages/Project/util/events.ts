// Local
import { PageType } from "services/page/types";
import { ReactProjectContext } from "./types";
import Page from "services/page";

const removePageById = (
    rootPages: PageType[],
    targetPageId: number
): PageType[] => {
    function removePage(page: PageType): boolean {
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

    const rootIndexToRemove = rootPages.findIndex((page) => removePage(page));
    if (rootIndexToRemove !== -1) rootPages.splice(rootIndexToRemove, 1);

    return rootPages;
};

export const addPage = async (
    context: ReactProjectContext,
    toggleShowChildren: ((value: boolean) => void) | null,
    pageId: number | null
) => {
    if (!pageId && !context) return null;

    await Page.create(
        "New page",
        undefined,
        Number(context.projectId),
        pageId,
        (response) => {
            context.setSelectedPageId(response.id);
            toggleShowChildren && toggleShowChildren(true);
            context.refetchMenuTabs();
        }
    );
};

export const deletePage = async (
    toggleShowMenu: (value: boolean) => void | null,
    pageId: number,
    context: ReactProjectContext
) => {
    if (!pageId && !context) return null;

    toggleShowMenu && toggleShowMenu(false);
    await Page.delete(pageId, () => {});

    if (pageId === context.selectedPageId) context.setSelectedPageId(null);

    // Updates the list on menu
    const prevMenuTabs = context.menuTabs;
    if (!prevMenuTabs) return;

    const newPages = removePageById(prevMenuTabs, pageId);
    context.setMenuTabs(newPages);
};
