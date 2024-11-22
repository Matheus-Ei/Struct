// Libraries
import { useState } from "react";

// Local
import Theme from "modules/Theme";

const ThemeController = () => {
    const [theme, setTheme] = useState(Theme.getCurrent());
    const themes = Theme.getKeys();

    const handleThemeChange = (event: any) => {
        const { newTheme } = Theme.set(event.target.value);

        setTheme(newTheme);
    };

    const renderThemes = (item: any, index: number) => {
        return (
            <input
                type="radio"
                name="theme-buttons"
                className="btn theme-controller px-12"
                checked={item === theme ? true : false}
                aria-label={item}
                value={item}
                key={index}
                onChange={handleThemeChange}
            />
        );
    };

    return (
        <div className="flex flex-row items-center justify-center w-full border rounded-box p-2 border-secondary bg-primary">
            <div className="flex flex-row items-center justify-between w-full border rounded-box py-5 px-10 border-secondary bg-primary">
                <div className="grid grid-cols-6 gap-y-4 gap-x-10 w-[48%]">
                    {themes.map(renderThemes)}
                </div>

                <div className="w-[48%] flex flex-col items-end justify-center text-primary-content h-full gap-8">
                    <h1 className="text-[2.5vw] font-bold text-end text-primary-content">
                        EXPERIMENTE DIVERSOS TEMAS
                    </h1>

                    <p className="text-[1.8vw] text-end text-primary-content">
                        Temos diversos temas prontos pra
                        <br /> você experimentar qual gosta mais.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ThemeController;
