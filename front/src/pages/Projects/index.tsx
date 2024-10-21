import { useEffect, useState } from "react";
import Request from "services/Request";
import Project from "./Project";

export type ProjectType = Array<{
    title: string;
    description: string;
    type: "Singular" | "Compost" | "Monopage";
    module: Array<string>;
    id: number;
}>;

const Projects = () => {
    const [projects, setProjects] = useState<ProjectType>([]);

    useEffect(() => {
        Request.get("project/get-all").then((response) => {
            setProjects(response);
        });
    }, []);

    return (
        <div className="grid grid-cols-4 w-fit h-fit gap-6">
            {projects.map((item, index) => {
                return (
                    <Project
                        title={item.title}
                        description={item.description}
                        id={item.id}
                        key={index}
                    />
                );
            })}
        </div>
    );
};

export default Projects;
