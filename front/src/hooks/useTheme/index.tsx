import { useEffect, createContext, useState, useContext } from "react";
import styles from "./themes";
import * as T from "./types";

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

export const context = createContext<any>(undefined);
export const ThemeProvider = ({ children }: any) => {
    const [theme, defTheme] = useState<T.Theme>(styles["default"]);

    return (
        <context.Provider value={{ theme, defTheme }}>
            {children}
        </context.Provider>
    );
};

export const useTheme = (newTheme?: string): T.Theme => {
    const { theme, defTheme } = useContext(context);

    if (newTheme) {
        defTheme(styles[newTheme]);
    }

    return theme;
};

export const useDark = () => {
    const [theme, setTheme] = useState<string>(localStorage.theme || "light");
    const colorTheme = theme === "dark" ? "light" : "dark";

    useEffect(() => {
        const root = window.document.documentElement;
        root.classList.remove(colorTheme);
        root.classList.add(theme);
        localStorage.setItem("theme", theme);
    }, [theme, colorTheme]);

    return [colorTheme, setTheme] as const;
};
