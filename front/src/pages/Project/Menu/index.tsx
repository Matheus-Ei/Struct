// Libraries
import { useContext } from "react";
import clsx from "clsx";

// Local
import { PageType } from "services/page/types";
import NewPageTab from "./NewPageTab";
import { ProjectContext } from "..";
import PageTab from "./PageTab";
import Point from "components/Point";
import { useNavigate } from "react-router-dom";

const Menu = () => {
    const useProjectContext = useContext(ProjectContext);
    const navigate = useNavigate();

    if (!useProjectContext) return null;
    const { menu, selectedPage } = useProjectContext;

    const renderPages = (item: PageType, index: number) => (
        <PageTab item={item} key={index} />
    );

    const projectPointCss = clsx(
        "w-full h-9 gap-x-2 rounded-btn py-1 px-4 mb-2",
        "flex flex-row justify-start items-center text-start",
        "cursor-default select-none",
        {
            "bg-primary text-primary-content": selectedPage.id === null,
        }
    );

    return (
        <div className="flex flex-col w-[300px] items-center h-screen border-r border-neutral gap-y-4 px-1">
            <div className="flex flex-col items-start justify-start w-full h-32 mt-4">
                <Point
                    text="Home"
                    icon="IoMdHome"
                    library="io"
                    onClick={() => navigate("/dashboard")}
                />
                <Point text="Search" icon="IoMdSearch" library="io" />
            </div>

            <div className="flex flex-col justify-start items-start w-full h-full overflow-y-scroll">
                <Point
                    text="Project"
                    icon="PiProjectorScreen"
                    library="pi"
                    className={projectPointCss}
                    onClick={() => selectedPage.set(null)}
                />

                {menu.tabs && menu.tabs.map(renderPages)}
                <NewPageTab />
            </div>

            <div className="flex flex-col w-full items-start justify-end h-32 mb-4">
                <Point text="Share" icon="CiShare2" library="ci" />
            </div>
        </div>
    );
};

// <Point text="Workflow" icon="GoWorkflow" library="go" />
// <Point text="Settings" icon="IoMdSettings" library="io" />

export default Menu;
