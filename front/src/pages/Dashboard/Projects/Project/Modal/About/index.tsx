import Actions from "./Actions";
import Informations from "./Informations";
import { Dispatch, SetStateAction } from "react";
import { useQuery } from "react-query";
import Request from "services/Request";

interface ModalType {
    show: boolean;
    projectId: number;
}

interface AboutProps {
    id: number;
    setModal: Dispatch<SetStateAction<ModalType>>;
}

const About = ({ id, setModal }: AboutProps) => {
    const getProjectInfo = () => Request.get(`project/get/${id}`);
    const { data: project } = useQuery("project-info-about", getProjectInfo);

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
