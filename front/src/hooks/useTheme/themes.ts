import * as I from "./interface";

const light: I.VarType = {
    primary: "#f9f9f9",
    secondary: "#000000",

    middle: "#888888",
    semi: "#e6e6e6",

    error: "#cc0000",
    success: "#4BB543",

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
