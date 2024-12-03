// Libraries
import { useNavigate } from "react-router-dom";
import clsx from "clsx";

// Local
import useToggle from "hooks/useToggle";
import Icon from "components/Icon";

// Types
import { ModalType } from "./Modal//utils/types";
import { SetStateType } from "types/global";

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
    const openProject = () => navigate(`/project/${id}`);

    return (
        <div
            className={bodyCss}
            onClick={openModal}
            onMouseEnter={() => toggleHover(true)}
            onMouseLeave={() => toggleHover(false)}
        >
            <div className="flex justify-between items-center">
                <h1 className="text-lg font-bold line-clamp-1">{title}</h1>

                {isHover && (
                    <button onClick={openProject} className="w-fit">
                        <Icon
                            name="MdOpenInNew"
                            library="md"
                            className="text-xl"
                        />
                    </button>
                )}
            </div>

            <p className="line-clamp-2 text-sm">{description}</p>
        </div>
    );
};

export default Project;
