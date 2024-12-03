// Libraries
import { useContext } from "react";

// Local
import { PageType } from "services/page/types";
import NewPageTab from "./NewPageTab";
import { PagesContext } from "..";
import PageTab from "./PageTab";

const Menu = () => {
    const context = useContext(PagesContext);
    if (!context) return null;
    const { menu } = context;

    const renderPages = (item: PageType, index: number) => (
        <PageTab item={item} index={index} key={index} />
    );

    return (
        <div className="flex flex-col w-[300px] items-center h-screen border-r border-neutral gap-4 px-1">
            <div className="flex flex-col items-center justify-center w-full h-32">
                <h1>Dashboard</h1>
                <h1>Shared</h1>
            </div>

            <div className="flex flex-col justify-start items-start w-full h-full overflow-y-scroll">
                {menu.tabs && menu.tabs.map(renderPages)}
                <NewPageTab />
            </div>

            <div className="flex flex-col w-full items-center justify-center h-32">
                <h1>Workflows</h1>
                <h1>Settings</h1>
            </div>
        </div>
    );
};

export default Menu;
