import { SetStateType } from "types/global";

// Libraries
export interface PagesRequestType {
    id: number;
    name: string;
    description: string;
    children_pages: Array<PagesRequestType> | null;
    emoji: string | null;
    module: string;
}

export interface ReactProjectContext {
    page: PagesRequestType | null;
    refetchPage: () => void;
    menuTabs: Array<PagesRequestType> | null;
    setMenuTabs: (newMenuTabs: Array<PagesRequestType>) => void;
    refetchMenuTabs: () => void;
    selectedPageId: number | null;
    setSelectedPageId: SetStateType<number | null>;
    projectId: string | undefined;
}
