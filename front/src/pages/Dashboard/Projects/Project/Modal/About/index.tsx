import Actions from "./Actions";
import Informations from "./Informations";
import { Dispatch, SetStateAction } from "react";
import useRequest from "hooks/useRequest";

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
}

const About = ({ id, setModal }: AboutProps) => {
    const { response: project } = useRequest<ProjectType>(`project/get/${id}`);

    return (
        <div className="flex flex-col w-full h-fit gap-8 mt-8 ml-8">
            <Informations
                title={project?.title}
                description={project?.description}
            />

            <Actions id={id} setModal={setModal} />
        </div>
    );
};

export default About;
