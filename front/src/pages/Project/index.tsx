import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Request from "services/Request";
import Menu from "./Menu";
import Page from "./Page";

type PagesRequestType = Array<{
    id: number;
    name: string;
    description: string;
    emoji: string;
    parentPage: number | null;
    module: string;
}>;

const Project = () => {
    const { id } = useParams();
    const [pages, setPages] = useState<PagesRequestType>([]);
    const [selectedPageId, setSelectedPageId] = useState<number>(0);

    useEffect(() => {
        Request.get(`project/pages/${id}`).then((response) =>
            setPages(response)
        );
    }, [id]);

    return (
        <div className="flex flex-row items-center w-screen h-screen gap-10 px-4">
            <Menu
                pages={pages}
                selectedPageId={selectedPageId}
                setSelectedPageId={setSelectedPageId}
            />

            <Page pages={pages} selectedPageId={selectedPageId} />
        </div>
    );
};

export default Project;
