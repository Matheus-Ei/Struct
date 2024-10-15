import * as I from "./types";

const light: I.VarType = {
    primary: "#ffffff",
    secondary: "#000000",

    middle: "#888888",
    semi: "#e6e6e6",

    error: "#ff9898",
    success: "#83ee84",

    style: "black",
};

const dark: I.VarType = {
    primary: "#111111",
    secondary: "#ffffff",

    middle: "#a8a8a8",
    semi: "#373737",

    error: "#cc0000",
    success: "#4BB543",

    style: "white",
};

const styles: any = {
    default: light,
    light,
    dark,
};

export default styles;
