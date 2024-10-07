interface VarType {
    [keys: string]: string;
}

const white: VarType = {
    backDef: "#ffffff",
    backMid: "#F3F3F3",
    backInv: "#000000",

    fontDef: "#000000",
    fontMid: "#888888",
    fontInv: "#ffffff",

    bordDef: "#000000",
    bordMid: "#717171",
    bordInv: "#ffffff",

    iconDef: "#000000",
    iconMid: "#888888",
    iconInv: "#ffffff",
};

const dark: VarType = {
    backDef: "#000000",
    backMid: "#888888",
    backInv: "#ffffff",

    fontDef: "#ffffff",
    fontMid: "#888888",
    fontInv: "#000000",

    bordDef: "#ffffff",
    bordMid: "#717171",
    bordInv: "#000000",

    iconDef: "#ffffff",
    iconMid: "#888888",
    iconInv: "#000000",
};

const themes: any = {
    white,
    dark,
};

export default themes;
