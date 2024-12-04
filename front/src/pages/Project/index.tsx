// Librarie
import { createContext, useState } from "react";
import { useParams } from "react-router-dom";

// Local
import { useAllPages, usePage } from "services/page/usePage";
import { ProjectContextType } from "./util/types";
import withLoader from "HOCs/withLoader";
import Dashboard from "./Dashboard";
import Menu from "./Menu";
import Page from "./Page";

export const ProjectContext = createContext<ProjectContextType | undefined>(
    undefined
);

const Project = () => {
    const { id } = useParams();

    // Menu tabs request
    const { data: tabs, refetch: refetchTabs } = useAllPages(Number(id));

    // Page content request
    const [selectedPageId, setSelectedPageId] = useState<number | null>(null);
    const getSelectedPageId = () => {
        if (!tabs || !selectedPageId) return 0;

        if (!selectedPageId) return tabs[0].id;

        return selectedPageId;
    };
    const { data: page, refetch: refetchPage } = usePage(getSelectedPageId());

    return (
        <ProjectContext.Provider
            value={{
                projectId: id,
                menu: { tabs, refetch: refetchTabs },
                page: { data: page, refetch: refetchPage },
                selectedPage: { id: selectedPageId, set: setSelectedPageId },
            }}
        >
            <div className="flex flex-row pr-10 items-center w-screen h-screen gap-10">
                <Menu />

                {selectedPageId ? <Page /> : <Dashboard />}
            </div>
        </ProjectContext.Provider>
    );
};

export default withLoader(Project, true);
