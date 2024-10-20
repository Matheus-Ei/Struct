// Services
import { useState } from "react";
import Icons from "services/Icons";
import Theme from "services/Theme";

const ThemeController = () => {
    const [theme, setTheme] = useState(Theme.getCurrent());
    const themes = Theme.getKeys();

    const handleThemeChange = (event: any) => {
        const { newTheme } = Theme.set(event.target.value);

        setTheme(newTheme);
    };

    return (
        <div className="dropdown mb-72">
            <div tabIndex={0} role="button" className="btn m-1">
                <p className="w-20 text-start">{theme}</p>
                <Icons name="MdExpandMore" library="md" />
            </div>

            <ul
                tabIndex={0}
                className="dropdown-content bg-base-300 rounded-box z-[1] w-52 p-2 shadow-2xl overflow-y-scroll overflow-x-hidden h-56 pr-3"
            >
                {themes.map((item: any, index: number) => {
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
