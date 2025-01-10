// Local
import useSafeContext from "hooks/useSafeContext";
import { PageType } from "services/page/types";
import { ProjectContext } from "pages/Project/context";
import PageTab from "./PageTab";

// Options
import NewPage from "./options/NewPage";
import DashProject from "./options/DashProject";
import Home from "./options/Home";
import Search from "./options/Search";

const Menu = () => {
    const { menu } = useSafeContext(ProjectContext);

    const renderPages = (item: PageType, index: number) => (
        <PageTab item={item} key={index} />
    );

    return (
        <div className="flex flex-col w-[300px] items-center h-screen border-r border-neutral gap-y-4 px-1">
            <div className="flex flex-col items-start justify-start w-full h-32 mt-4">
                <Search />
            </div>

            <div className="flex flex-col justify-start items-start w-full h-full overflow-y-scroll">
                <DashProject />

                {menu.tabs && menu.tabs.map(renderPages)}
                <NewPage />
            </div>

            <div className="flex flex-col w-full items-start justify-end h-32 mb-4">
                <Home />
            </div>
        </div>
    );
};

export default Menu;
