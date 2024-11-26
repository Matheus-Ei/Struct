import { PageType } from "services/page/types";
import { SetStateType } from "types/global";

export interface ReactProjectContext {
    page: PageType | null | undefined;
    refetchPage: () => void;
    menuTabs: Array<PageType> | null;
    setMenuTabs: (newMenuTabs: Array<PageType>) => void;
    refetchMenuTabs: () => void;
    selectedPageId: number | null;
    setSelectedPageId: SetStateType<number | null>;
    projectId: string | undefined;
}
