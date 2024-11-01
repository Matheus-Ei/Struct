import useRequest from "hooks/useRequest";
import React, { useEffect, useState } from "react";
import CreateProject from "./CreateProject";
import CreateProjectModal from "./CreateProject/Modal";
import Project from "./Project";
import ProjectModal from "./Project/Modal";

type ProjectType = Array<{
    id: number;
    title: string;
    description: string;
}>;

interface ModalType {
    show: boolean;
    projectId: number;
}

export const projectsContext = React.createContext<any>(undefined);

const Projects = () => {
    const [projectModal, setProjectModal] = useState<ModalType>({
        show: false,
        projectId: 1,
    });

    const renderProject = (item: any, index: number) => {
        return (
            <Project
                id={item.id}
                title={item.title}
                description={item.description}
                setModal={setProjectModal}
                key={index}
            />
        );
    };

    const [showCreateProject, setShowCreateProject] = useState(false);

    const { response: projects, refetch } =
        useRequest<ProjectType>("user/projects");

    return (
        <projectsContext.Provider value={{ refetch }}>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 w-fit h-fit gap-6 justify-items-start items-center">
                {projects?.map(renderProject)}

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
