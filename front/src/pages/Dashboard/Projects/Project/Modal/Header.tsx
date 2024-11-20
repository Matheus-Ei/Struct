// Libraries
import clsx from "clsx";
import { Dispatch, SetStateAction } from "react";

interface HeaderProps {
    tab: string;
    setTab: Dispatch<SetStateAction<string>>;
}

const Header = ({ tab, setTab }: HeaderProps) => {
    const renderTabs = (item: any, index: number) => {
        const tabCss = clsx("", {
            "font-bold cursor-pointer select-none text-xl": tab === item,
            "cursor-pointer select-none text-lg": tab !== item,
        });

        return (
            <h1 key={index} className={tabCss} onClick={() => setTab(item)}>
                {item}
            </h1>
        );
    };

    const allTabs = ["About", "Pages"];

    return (
        <div className="flex flex-row gap-8 mt-5 ml-8">
            {allTabs.map(renderTabs)}
        </div>
    );
};

export default Header;
