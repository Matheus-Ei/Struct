// Local
import { LocalStorage } from "../Storage";
import themes from "./themes";

class Theme {
    public static set(newTheme?: string) {
        const themeObj = LocalStorage.get("theme");
        const oldTheme = themeObj ? themeObj.theme : "default";

        const theme: string = newTheme ? newTheme : oldTheme;

        document.documentElement.setAttribute("data-theme", theme);
        LocalStorage.set("theme", { theme });

        return { oldTheme, newTheme };
    }

    public static getCurrent() {
        try {
            const { theme } = LocalStorage.get("theme");
            return theme;
        } catch (e) {
            console.error("Default theme is not set");
            return "default";
        }
    }

    public static getKeys() {
        return themes.map((item) => {
            if (typeof item === "object") {
                return Object.keys(item);
            }

            return item;
        });
    }

    public static getAll() {
        return themes;
    }
}

export default Theme;
