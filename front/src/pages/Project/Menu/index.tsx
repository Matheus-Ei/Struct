// Libraries
import { useContext } from "react";

// Local
import { PageType } from "services/page/types";
import NewPageTab from "./NewPageTab";
import { ProjectContext } from "..";
import PageTab from "./PageTab";
import Point from "components/Point";

const Menu = () => {
    const useProjectContext = useContext(ProjectContext);
    if (!useProjectContext) return null;
    const { menu } = useProjectContext;

    const renderPages = (item: PageType, index: number) => (
        <PageTab item={item} key={index} />
    );

    return (
        <div className="flex flex-col w-[300px] items-center h-screen border-r border-neutral gap-y-4 px-1">
            <div className="flex flex-col items-start justify-start w-full h-32 mt-4">
                <Point text="Search" icon="IoMdSearch" library="io" />
            </div>

            <div className="flex flex-col justify-start items-start w-full h-full overflow-y-scroll">
                {menu.tabs && menu.tabs.map(renderPages)}
                <NewPageTab />
            </div>

            <div className="flex flex-col w-full items-start justify-end h-32 mb-4">
                <Point text="Share" icon="CiShare2" library="ci" />
            </div>
        </div>
    );
};

// <Point text="Home" icon="IoMdHome" library="io" />
// <Point text="Workflow" icon="GoWorkflow" library="go" />
// <Point text="Settings" icon="IoMdSettings" library="io" />

export default Menu;
