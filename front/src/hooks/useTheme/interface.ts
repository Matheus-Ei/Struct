export interface VarType {
    [keys: string]: string;
}

export interface Theme {
    primary: string;
    secondary: string;

    middle: string;
    semi: string;

    error: string;
    success: string;

    style: "black" | "white";
}
