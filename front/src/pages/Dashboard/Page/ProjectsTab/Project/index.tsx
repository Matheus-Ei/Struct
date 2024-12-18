// Libraries
import { useNavigate } from "react-router-dom";
import clsx from "clsx";

// Local
import useToggle from "hooks/useToggle";
import HoverButtons from "./HoverButtons";
import ProjectModal from "./Modal";
import { ModalType } from "./Modal/utils/types";
import { useState } from "react";

interface ProjectProps {
    title: string;
    description: string;
    id: number;
}

const bodyCss = clsx(
    "w-96 h-24 p-3",
    "flex flex-col cursor-pointer",
    "border border-b-primary border-base-300 rounded-btn  border-b-4"
);

const Project = ({ title, description, id }: ProjectProps) => {
    const [modal, setModal] = useState<ModalType>({
        show: false,
        projectId: 1,
    });

    const navigate = useNavigate();
    const [isHover, toggleHover] = useToggle(false);

    const openModal = () => setModal({ projectId: id, show: true });
    const hover = () => toggleHover(true);
    const unhover = () => toggleHover(false);

    return (
        <>
            <div
                className={bodyCss}
                onClick={openModal}
                onMouseEnter={hover}
                onMouseLeave={unhover}
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

            <ProjectModal modal={modal} setModal={setModal} />
        </>
    );
};

export default Project;
