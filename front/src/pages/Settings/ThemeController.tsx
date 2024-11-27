// Libraries
import clsx from "clsx";
import { ChangeEvent, useState } from "react";

// Local
import Icon from "components/Icon";
import Theme from "modules/Theme";

const themeListCss = clsx(
    "dropdown-content",
    "w-52 h-56",
    "overflow-y-scroll overflow-x-hidden",
    "bg-base-300 rounded-box shadow-2xl",
    "z-1 pr-3 p-2"
);

const ThemeController = () => {
    const [theme, setTheme] = useState(Theme.current);
    const themes = Theme.keys;

    const handleThemeChange = (event: ChangeEvent<HTMLInputElement>) => {
        const eventTarget = event.target as HTMLInputElement;
        const { newTheme } = Theme.set(eventTarget.value);

        setTheme(newTheme);
    };

    const renderThemes = (item: string, index: number) => {
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
                <Icon name="MdExpandMore" library="md" />
            </div>

            <ul tabIndex={0} className={themeListCss}>
                {themes.map(renderThemes)}
            </ul>
        </div>
    );
};

export default ThemeController;
