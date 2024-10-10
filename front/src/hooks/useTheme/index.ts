import { useEffect, useState } from "react";
import theme from "./themes";

interface VarType {
    [keys: string]: string;
}

export const useSize = () => {
    const [size, setSize] = useState<Object>();

    useEffect(() => {
        setSize({
            width: window.innerWidth,
            height: window.innerHeight,
        });
    });

    return size;
};

export const useColor = (newTheme?: string) => {
    const [colors, setColors] = useState<VarType>();

    useEffect(() => {
        if (newTheme) {
            setColors(theme[newTheme]);
        } else {
            setColors(theme["light"]);
        }
    });

    return colors;
};
