// Libraries
import clsx from "clsx";
import { Dispatch, SetStateAction } from "react";

// Local
import Icons from "services/Icons";

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

const Project = ({ title, description, id, setModal }: ProjectProps) => {
    const handleOpen = () => {
        setModal({ projectId: id, show: true });
    };

    const bodyCss = clsx(
        "w-96 h-32 p-3",
        "flex flex-col justify-between",
        "border border-primary rounded-btn"
    );

    return (
        <div className={bodyCss}>
            <div>
                <h1 className="text-lg font-bold line-clamp-1">{title}</h1>
                <p className="line-clamp-2">{description}</p>
            </div>

            <button onClick={handleOpen} className="w-fit">
                <Icons name="MdOpenInNew" library="md" size={20} />
            </button>
        </div>
    );
};

export default Project;
