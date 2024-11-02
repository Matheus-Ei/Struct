import withLoader from "HOCs/withLoader";
import useRequest from "hooks/useRequest";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Menu from "./Menu";
import Page from "./Page";

interface PagesRequestType {
    id: number;
    name: string;
    description: string;
    emoji: number;
    parentPage: number | null;
    module: string;
}

const Project = () => {
    const { id } = useParams();
    const [selectedPageId, setSelectedPageId] = useState<number>(0);

    const { response: pages } = useRequest<Array<PagesRequestType>>(
        `project/pages/${id}`,
        id
    );

    return (
        <div className="flex flex-row items-center w-screen h-screen gap-10">
            <Menu
                pages={pages}
                selectedPageId={selectedPageId}
                setSelectedPageId={setSelectedPageId}
            />

            <Page pages={pages} selectedPageId={selectedPageId} />
        </div>
    );
};

export default withLoader(Project, true);
