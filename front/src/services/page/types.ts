export interface PageType {
    id: number;
    name: string;
    description: string;
    children_pages: Array<PageType> | null;
    emoji: string | null;
    module: string | null;
}

export interface GetPagesType {
    message: string;
    data: Array<PageType>;
}

export interface GetPageType {
    message: string;
    data: PageType;
}
