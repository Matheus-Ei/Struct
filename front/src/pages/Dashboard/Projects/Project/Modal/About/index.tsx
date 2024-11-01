import Actions from "./Actions";
import Informations from "./Informations";
import Request from "services/Request";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

interface ModalType {
    show: boolean;
    projectId: number;
}

interface AboutProps {
    id: number;
    setModal: Dispatch<SetStateAction<ModalType>>;
}

interface ProjectType {
    title: string;
    description: string;
    type: string;
    modules: Array<string>;
}

const About = ({ id, setModal }: AboutProps) => {
    const loading = "Loading. . .";
    const [project, setProject] = useState<ProjectType>({
        title: loading,
        description: loading,
        type: loading,
        modules: [loading],
    });

    useEffect(() => {
        Request.get(`project/get/${id}`).then((response) => {
            setProject({
                title: response.title,
                description: response.description,
                type: response.type,
                modules: response.module,
            });
        });
    }, []);

    return (
        <div className="flex flex-col w-full h-fit gap-8 mt-8 ml-8">
            <Informations
                title={project.title}
                description={project.description}
            />

            <Actions id={id} setModal={setModal} />
        </div>
    );
};

export default About;
