// Libraries
import clsx from "clsx";
import { useState } from "react";

// Local
import Icons from "modules/Icons";
import Theme from "modules/Theme";

const themeListCss = clsx(
    "dropdown-content",
    "w-52 h-56",
    "overflow-y-scroll overflow-x-hidden",
    "bg-base-300 rounded-box shadow-2xl",
    "z-1 pr-3 p-2"
);

const ThemeController = () => {
    const [theme, setTheme] = useState(Theme.getCurrent());
    const themes = Theme.getKeys();

    const handleThemeChange = (event: any) => {
        const { newTheme } = Theme.set(event.target.value);

        setTheme(newTheme);
    };

    const renderThemes = (item: any, index: number) => {
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
    };

    return (
        <div className="dropdown">
            <div tabIndex={0} role="button" className="btn m-1">
                <p className="w-20 text-start">{theme}</p>
                <Icons name="MdExpandMore" library="md" />
            </div>

            <ul tabIndex={0} className={themeListCss}>
                {themes.map(renderThemes)}
            </ul>
        </div>
    );
};

export default ThemeController;
