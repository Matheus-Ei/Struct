// Services
import { useState } from "react";
import Icons from "services/Icons";
import { LocalStorage } from "services/Storage";
import Theme from "services/Theme";

const ThemeController = () => {
    const oldTheme = LocalStorage.get("theme");
    const [theme, setTheme] = useState(oldTheme ? oldTheme.theme : "default");

    const themes = Theme.getKeys();

    const handleThemeChange = (event: any) => {
        const newTheme = event.target.value;

        LocalStorage.set("theme", { theme: newTheme });
        setTheme(newTheme);
        document.documentElement.setAttribute("data-theme", newTheme);
    };

    return (
        <div className="dropdown mb-72">
            <div tabIndex={0} role="button" className="btn m-1">
                <p className="w-20 text-start">{theme}</p>
                <Icons name="MdExpandMore" library="md" />
            </div>
            <ul
                tabIndex={0}
                className="dropdown-content bg-base-300 rounded-box z-[1] w-52 p-2 shadow-2xl"
            >
                {themes.map((item, index) => {
                    return (
                        <li key={index}>
                            <input
                                type="radio"
                                name="theme-dropdown"
                                className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                                aria-label={item}
                                value={item}
                                onChange={handleThemeChange}
                            />
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default ThemeController;
