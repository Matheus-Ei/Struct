// Services
import Icons from "services/Icons";

// Libraries
import { Dispatch, SetStateAction } from "react";

interface ModalType {
    show: boolean;
    projectId: number;
}

interface ProjectProps {
    title: string;
    description: string;
    setModal: Dispatch<SetStateAction<ModalType>>;
    id: number;
}

const handleModal = (
    setModal: Dispatch<SetStateAction<ModalType>>,
    id: number
) => {
    return setModal({ projectId: id, show: true });
};

const Project = ({ title, description, id, setModal }: ProjectProps) => {
    return (
        <div className="flex flex-col w-96 h-32 border border-primary rounded-btn p-3 justify-between">
            <div>
                <h1 className="text-lg font-bold">{title}</h1>
                <p>{description}</p>
            </div>

            <button onClick={() => handleModal(setModal, id)} className="w-fit">
                <Icons name="MdOpenInNew" library="md" size={20} />
            </button>
        </div>
    );
};

export default Project;
