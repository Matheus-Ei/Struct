import clsx from "clsx";
import { createElement } from "react";

type TabType = [string, () => JSX.Element];

interface Props {
    tabs: Array<TabType>;
    selectedTab: string;
}

export const TabSelector = ({ tabs, selectedTab }: Props) => {
    const renderTabs = (item: TabType, index: number) => {
        const css = clsx("select-none cursor-pointer", {
            "font-bold text-xl": selectedTab === item[0],
            "text-lg": selectedTab !== item[0],
        });

        return (
            <h1 key={index} className={css}>
                {item[0]}
            </h1>
        );
    };

    return (
        <div className="w-full flex items-center justify-center">
            {tabs.map(renderTabs)}
        </div>
    );
};

export const TabBody = ({ tabs, selectedTab }: Props) => {
    const renderBody = (item: TabType, index: number) => {
        if (selectedTab !== item[0]) return null;

        return createElement(item[1], { key: index });
    };

    return <div className="w-screen h-screen">{tabs.map(renderBody)}</div>;
};
