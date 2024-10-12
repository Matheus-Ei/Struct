import * as I from "./interface";

const light: I.VarType = {
    primary: "#f9f9f9",
    middle: "#888888",
    secondary: "#000000",

    error: "#cc0000",
    success: "#4BB543",
};

const dark: I.VarType = {
    primary: "#111111",
    middle: "#a8a8a8",
    secondary: "#ffffff",

    error: "#cc0000",
    success: "#4BB543",
};

const styles: any = {
    default: light,
    light,
    dark,
};

export default styles;
