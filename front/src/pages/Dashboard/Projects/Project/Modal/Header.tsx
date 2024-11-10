import { Dispatch, SetStateAction } from "react";

interface HeaderProps {
    tab: string;
    setTab: Dispatch<SetStateAction<string>>;
}

const Header = ({ tab, setTab }: HeaderProps) => {
    const selectedStyle = "font-bold cursor-pointer select-none text-xl";
    const notSelectedStyle = "cursor-pointer select-none text-lg";

    const renderTabs = (item: any, index: number) => {
        return (
            <h1
                key={index}
                className={tab === item ? selectedStyle : notSelectedStyle}
                onClick={() => setTab(item)}
            >
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
