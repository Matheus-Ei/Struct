// Modules
import themes from "./themes";

// Services
import { LocalStorage } from "../Storage";

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
        const { theme } = LocalStorage.get("theme");
        return theme ? theme : "default";
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
