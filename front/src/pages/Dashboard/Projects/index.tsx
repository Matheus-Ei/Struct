// Libraries
import { createContext, useState } from "react";
import clsx from "clsx";

// Components
import CreateProjectModal from "./CreateProject/Modal";
import SearchBar from "components/SearchBar";
import CreateProject from "./CreateProject";
import ProjectModal from "./Project/Modal";
import Project from "./Project";

// Local
import { useAllProjects } from "services/project/useProject";
import { ModalType } from "./Project/Modal/utils/types";
import { ProjectType } from "services/project/type";

interface ProjectsContextType {
    refetch: () => void;
}

export const ProjectsContext = createContext<ProjectsContextType | undefined>(
    undefined
);

const projectsDivCss = clsx(
    "grid items-center justify-items-start gap-6",
    "grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4"
);

const Projects = () => {
    const [showCreateProject, setShowCreateProject] = useState(false);
    const [projectModal, setProjectModal] = useState<ModalType>({
        show: false,
        projectId: 1,
    });

    const { data: projects, refetch } = useAllProjects();
    const [searchResult, setSearchResult] = useState<Array<string>>([]);
    if (!projects) return <div>Loading. . .</div>;

    const searchPlace = projects.map((item: ProjectType): string => item.title);
    const renderProject = (item: ProjectType, index: number) => {
        // If the searchPlace is set and the item is not in the searchPlace, return null
        if (searchResult?.length >= 0 && !searchResult?.includes(item.title))
            return null;

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

    return (
        <ProjectsContext.Provider value={{ refetch }}>
            <div className="flex flex-col items-center justify-center w-[95%] gap-4">
                <div className="w-[40%]">
                    <SearchBar
                        searchPlace={searchPlace}
                        setResult={setSearchResult}
                        placeholder="Search project. . ."
                    />
                </div>

                <div className={projectsDivCss}>
                    {projects?.map(renderProject)}

                    <CreateProject showModal={setShowCreateProject} />
                </div>
            </div>

            <ProjectModal modal={projectModal} setModal={setProjectModal} />
            <CreateProjectModal
                showModal={showCreateProject}
                setModal={setShowCreateProject}
            />
        </ProjectsContext.Provider>
    );
};

export default Projects;
