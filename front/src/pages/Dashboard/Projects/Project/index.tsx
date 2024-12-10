// Libraries
import { useNavigate } from "react-router-dom";
import clsx from "clsx";

// Local
import useToggle from "hooks/useToggle";

// Types
import { ModalType } from "./Modal//utils/types";
import { SetStateType } from "types/global";
import HoverButtons from "./HoverButtons";

interface ProjectProps {
    title: string;
    description: string;
    setModal: SetStateType<ModalType>;
    id: number;
}

const bodyCss = clsx(
    "w-96 h-24 p-3",
    "flex flex-col cursor-pointer",
    "border border-b-primary border-base-300 rounded-btn  border-b-4"
);

const Project = ({ title, description, id, setModal }: ProjectProps) => {
    const navigate = useNavigate();
    const [isHover, toggleHover] = useToggle(false);

    const openModal = () => setModal({ projectId: id, show: true });

    return (
        <div
            className={bodyCss}
            onClick={openModal}
            onMouseEnter={() => toggleHover(true)}
            onMouseLeave={() => toggleHover(false)}
        >
            <div className="flex justify-between items-center">
                <h1 className="text-lg font-bold line-clamp-1">{title}</h1>

                <HoverButtons
                    openProject={() => navigate(`/project/${id}`)}
                    isHover={isHover}
                />
            </div>

            <p className="line-clamp-2 text-sm">{description}</p>
        </div>
    );
};

export default Project;
