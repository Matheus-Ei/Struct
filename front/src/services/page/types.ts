export interface PagesRequestType {
    id: number;
    name: string;
    description: string;
    children_pages: Array<PagesRequestType> | null;
    emoji: string | null;
    module: string;
}
