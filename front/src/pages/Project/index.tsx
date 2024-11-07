import withLoader from "HOCs/withLoader";
import useRequest from "hooks/useRequest";
import { createContext, useState } from "react";
import { useParams } from "react-router-dom";
import Menu from "./Menu";
import Dashboard from "./Dashboard";
import Page from "./Page";
import { PagesRequestType, ReactProjectContext } from "./util/types";

export const PagesContext = createContext<ReactProjectContext | undefined>(
    undefined
);

const Project = () => {
    const { id } = useParams();
    const [selectedPageId, setSelectedPageId] = useState<number | null>(null);

    const { response: pages, refetch } = useRequest<Array<PagesRequestType>>(
        `project/pages/${id}`,
        id
    );

    return (
        <PagesContext.Provider
            value={{
                pages,
                selectedPageId,
                setSelectedPageId,
                refetch,
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
