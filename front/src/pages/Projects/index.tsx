import useToggle from "hooks/useToggle";
import React, { useEffect, useState } from "react";
import Request from "services/Request";
import CreateProject from "./CreateProject";
import CreateProjectModal from "./CreateProject/Modal";
import Project from "./Project";
import ProjectModal from "./Project/Modal";

type ProjectType = Array<{
    title: string;
    description: string;
    type: "Singular" | "Compost" | "Monopage";
    module: Array<string>;
    id: number;
}>;

interface ModalType {
    show: boolean;
    projectId: number;
}

interface ProjectsContext {
    refresh: () => any;
}

export const projectsContext = React.createContext<ProjectsContext | undefined>(
    undefined
);

const Projects = () => {
    const [projects, setProjects] = useState<ProjectType>([]);
    const [projectModal, setProjectModal] = useState<ModalType>({
        show: false,
        projectId: 1,
    });

    const [showCreateProject, setShowCreateProject] = useState(false);

    const [refRefresh, refresh] = useToggle(false);

    useEffect(() => {
        Request.get("project/get-all").then((response) => {
            setProjects(response);
        });
    }, [refRefresh]);

    return (
        <projectsContext.Provider value={{ refresh }}>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 w-fit h-fit gap-6 justify-items-start items-center">
                {projects.map((item, index) => {
                    return (
                        <Project
                            title={item.title}
                            description={item.description}
                            id={item.id}
                            setModal={setProjectModal}
                            key={index}
                        />
                    );
                })}

                <CreateProject showModal={setShowCreateProject} />
            </div>

            <ProjectModal modal={projectModal} setModal={setProjectModal} />
            <CreateProjectModal
                showModal={showCreateProject}
                setModal={setShowCreateProject}
            />
        </projectsContext.Provider>
    );
};

export default Projects;
