// Modules
import themes from "./themes";

class Theme {
    public static set(newTheme: string) {
        document.documentElement.setAttribute("data-theme", newTheme);
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
