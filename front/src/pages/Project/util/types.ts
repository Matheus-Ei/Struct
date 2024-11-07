import { Dispatch, SetStateAction } from "react";

export interface PagesRequestType {
    id: number;
    name: string;
    description: string;
    children_pages: Array<PagesRequestType> | null;
    emoji: number | null;
    module: string;
}

export interface ReactProjectContext {
    pages: Array<PagesRequestType> | null;
    selectedPageId: number | null;
    setSelectedPageId: Dispatch<SetStateAction<number | null>>;
    refetch: () => void;
    projectId: string | undefined;
}
