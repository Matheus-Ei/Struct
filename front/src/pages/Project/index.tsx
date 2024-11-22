// Librarie
import { createContext, useState } from "react";
import { useParams } from "react-router-dom";
// Local
import { PagesRequestType, ReactProjectContext } from "./util/types";
import withLoader from "HOCs/withLoader";
import Dashboard from "./Dashboard";
import Menu from "./Menu";
import Page from "./Page";
import { useAllPages, usePage } from "services/page/usePage";

export const PagesContext = createContext<ReactProjectContext | undefined>(
    undefined
);

type PagesRequestTypeArray = Array<PagesRequestType> | null;

const Project = () => {
    const { id } = useParams();

    // Menu tabs request
    const [menuTabs, setMenuTabs] = useState<PagesRequestTypeArray>(null);
    const { refetch: refetchMenuTabs } = useAllPages(Number(id), (response) => {
        setMenuTabs(response);
    });

    // Page content request
    const [selectedPageId, setSelectedPageId] = useState<number | null>(null);
    const getSelectedPageId = () => {
        if (!menuTabs || !selectedPageId) return 0;

        if (!selectedPageId) return menuTabs[0].id;

        return selectedPageId;
    };
    const { data: page, refetch: refetchPage } = usePage(getSelectedPageId());

    return (
        <PagesContext.Provider
            value={{
                page,
                refetchPage,
                menuTabs,
                refetchMenuTabs,
                setMenuTabs,
                selectedPageId,
                setSelectedPageId,
                projectId: id,
            }}
        >
            <div className="flex flex-row pr-10 items-center w-screen h-screen gap-10">
                <Menu />

                {selectedPageId ? <Page /> : <Dashboard />}
            </div>
        </PagesContext.Provider>
    );
};

export default withLoader(Project, true);
