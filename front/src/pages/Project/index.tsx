import withLoader from "HOCs/withLoader";
import useRequest from "hooks/useRequest";
import React, {
    createContext,
    Dispatch,
    SetStateAction,
    useState,
} from "react";
import { useParams } from "react-router-dom";
import Menu from "./Menu";
import NewPage from "./NewPage";
import Page from "./Page";

interface PagesRequestType {
    id: number;
    name: string;
    description: string;
    children_pages: Array<PagesRequestType> | null;
    emoji: number | null;
    module: string;
}

interface ReactProjectContext {
    pages: Array<PagesRequestType> | null;
    selectedPageId: number | null;
    setSelectedPageId: Dispatch<SetStateAction<number | null>>;
    refetch: () => void;
    newParentPage: number | null;
    setNewParentPage: Dispatch<SetStateAction<number | null>>;
}

export const PagesContext = createContext<ReactProjectContext | undefined>(
    undefined
);

const Project = () => {
    const { id } = useParams();
    const [selectedPageId, setSelectedPageId] = useState<number | null>(null);
    const [newParentPage, setNewParentPage] = useState<number | null>(null);

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
                newParentPage,
                setNewParentPage,
            }}
        >
            <div className="flex flex-row pr-10 items-center w-screen h-screen gap-10">
                <Menu />

                {selectedPageId ? <Page /> : <NewPage />}
            </div>
        </PagesContext.Provider>
    );
};

export default withLoader(Project, true);
