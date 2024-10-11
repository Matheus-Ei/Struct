import * as I from "./interface";

const light: I.VarType = {
    primary: "#ffffff",
    middle: "#888888",
    secondary: "#000000",
};

const dark: I.VarType = {
    primary: "#000000",
    middle: "#888888",
    secondary: "#ffffff",
};

const styles: any = {
    default: light,
    light,
    dark,
};

export default styles;
