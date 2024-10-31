import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Request from "services/Request";
import Compost from "./Types/Compost";
import Monopage from "./Types/Monopage";
import Singular from "./Types/Singular";

interface ProjectRequestType {
    id: number;
    title: string;
    description: string;
    type: string;
    module: Array<string>;
}

const Project = () => {
    const { id } = useParams();
    const [project, setProject] = useState<ProjectRequestType>({
        id: 0,
        title: "project",
        description: "project",
        type: "Singular",
        module: ["Notes"],
    });

    useEffect(() => {
        Request.get(`project/get/${id}`).then((response) =>
            setProject(response)
        );
    }, [id]);

    switch (project.type) {
        case "Singular":
            return <Singular projectId={project.id} module={project.module[0]} />;

        case "Monopage":
            return <Monopage projectId={project.id} module={project.module[0]} />;

        case "Compost":
            return <Compost projectId={project.id} modules={project.module} />;

        default:
            return <div>ERROR . . .</div>;
    }
};

export default Project;
