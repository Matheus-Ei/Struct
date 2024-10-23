// Hooks
import { useEffect, useState } from "react";

// Services
import Request from "services/Request";
import CreateProjectButton from "./CreateProjectButton";
import CreateProjectModal from "./CreateProjectModal";

// Components
import Project from "./Project";
import ProjectModal from "./ProjectModal";

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

const Projects = () => {
    const [projects, setProjects] = useState<ProjectType>([]);
    const [projectModal, setProjectModal] = useState<ModalType>({
        show: false,
        projectId: 0,
    });

    const [showCreateProject, setShowCreateProject] = useState(false);

    useEffect(() => {
        Request.get("project/get-all").then((response) => {
            setProjects(response);
        });
    }, []);

    return (
        <>
            <div className="grid grid-cols-4 w-fit h-fit gap-6 justify-items-center items-center ">
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

                <CreateProjectButton showModal={setShowCreateProject}/>
            </div>

            <ProjectModal modal={projectModal} setModal={setProjectModal} />
            <CreateProjectModal
                showModal={showCreateProject}
                setModal={setShowCreateProject}
            />
        </>
    );
};

export default Projects;
