export interface IconType {
    name: string;
    library: string;
}

export type MultiIconType = Array<IconType>;

export interface IconPointProps {
    icons: MultiIconType;
}
