// HOCs
import withLoader from "HOCs/withLoader";

// Hooks
import { useEffect, useState } from "react";

// Services
import Request from "services/Request";

// Components
import Project from "./Project";
import Actions from "./Actions";

// Modules
import { ProjectType, SetProjectType } from "./types";

const emptyProjects = () => {
    return (
        <div className="flex items-start justify-center w-full h-full">
            <p className="text-base-content">Big things will be here soon...</p>
        </div>
    );
};

const hasProjects = (projects: ProjectType, setProjects: SetProjectType) => {
    return (
        <div
            className={`grid grid-cols-3 gap-4 overflow-y-scroll h-[60vh] w-fit pr-5 ${projects.length > 6 && "border-btn border-neutral"}`}
        >
            {projects.map((item, index) => {
                return (
                    <Project
                        title={item.title}
                        description={item.description}
                        type={item.type}
                        modules={item.module}
                        projectId={item.id}
                        setProjects={setProjects}
                        key={index}
                    />
                );
            })}
        </div>
    );
};

const Projects = () => {
    const [projects, setProjects] = useState<ProjectType>([]);

    useEffect(() => {
        Request.get(
            (process.env.REACT_APP_BACK_URL as string) + "/project/get-all"
        ).then((item) => {
            setProjects(item);
        });
    }, []);

    return (
        <div className="flex flex-col gap-12 items-center justify-start w-full h-[90vh]">
            <h1 className="font-bold text-lg">Projects</h1>

            {projects.length === 0
                ? emptyProjects()
                : hasProjects(projects, setProjects)}

            <Actions />
        </div>
    );
};

export default withLoader(Projects, true);
