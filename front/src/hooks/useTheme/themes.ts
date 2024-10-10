interface VarType {
    [keys: string]: string;
}

const light: VarType = {
    primary: "#ffffff",
    secondary: "#000000",
};

const dark: VarType = {
    primary: "#000000",
    secondary: "#ffffff",
};

const themes: any = {
    light,
    dark,
};

export default themes;
