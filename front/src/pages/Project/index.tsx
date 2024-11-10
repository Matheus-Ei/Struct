import withLoader from "HOCs/withLoader";
import { createContext, useState } from "react";
import { useParams } from "react-router-dom";
import Menu from "./Menu";
import Dashboard from "./Dashboard";
import Page from "./Page";
import { PagesRequestType, ReactProjectContext } from "./util/types";
import { useQuery } from "react-query";
import Request from "services/Request";

export const PagesContext = createContext<ReactProjectContext | undefined>(
    undefined
);

type PagesRequestTypeArray = Array<PagesRequestType> | null;

const Project = () => {
    const { id } = useParams();
    const [selectedPageId, setSelectedPageId] = useState<number | null>(null);

    // Menu tabs request
    const [menuTabs, setMenuTabs] = useState<PagesRequestTypeArray>(null);
    const getMenuTabs = () => {
        const response = Request.get(`project/pages/${id}`).then((res) =>
            setMenuTabs(res)
        );
        return response;
    };
    const { refetch: refetchMenuTabs } = useQuery(
        ["project-basic", id],
        getMenuTabs
    );

    // Page content request
    const getPageData = () => {
        if (!selectedPageId) {
            return null;
        }

        return Request.get(`page/geral/${selectedPageId}`);
    };
    const { data: page, refetch: refetchPage } = useQuery(
        ["page-geral", selectedPageId],
        getPageData
    );

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
