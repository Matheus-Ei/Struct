import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Request from "services/Request";

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
    const [pages, setPages] = useState<PagesRequestType>({});

    useEffect(() => {
        Request.get(`project/pages/${id}`).then((response) =>
            setPages(response)
        );
    }, [id]);

    return <div></div>;
};

export default Project;
