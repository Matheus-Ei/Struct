// Libraries
import React, { useState } from "react";

// Local
import CreateProjectModal from "./CreateProject/Modal";
import CreateProject from "./CreateProject";
import ProjectModal from "./Project/Modal";
import Project from "./Project";
import clsx from "clsx";
import { ModalType } from "./Project/Modal/utils/types";
import { useAllProjects } from "services/project/useProject";

export const projectsContext = React.createContext<any>(undefined);

const Projects = () => {
    const [showCreateProject, setShowCreateProject] = useState(false);
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

    const { data: projects, refetch } = useAllProjects();

    const projectsDivCss = clsx(
        "grid items-center justify-items-start gap-6",
        "grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4"
    );

    return (
        <projectsContext.Provider value={{ refetch }}>
            <div className={projectsDivCss}>
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
