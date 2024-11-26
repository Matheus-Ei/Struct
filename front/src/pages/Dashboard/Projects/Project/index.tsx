// Libraries
import clsx from "clsx";

// Local
import Icons from "modules/Icons";
import { SetStateType } from "types/global";
import { ModalType } from "./Modal//utils/types";

interface ProjectProps {
    title: string;
    description: string;
    setModal: SetStateType<ModalType>;
    id: number;
}

const bodyCss = clsx(
    "w-96 h-32 p-3",
    "flex flex-col justify-between",
    "border border-primary rounded-btn"
);

const Project = ({ title, description, id, setModal }: ProjectProps) => {
    const handleOpen = () => {
        setModal({ projectId: id, show: true });
    };

    return (
        <div className={bodyCss}>
            <div>
                <h1 className="text-lg font-bold line-clamp-1">{title}</h1>
                <p className="line-clamp-2">{description}</p>
            </div>

            <button onClick={handleOpen} className="w-fit">
                <Icons name="MdOpenInNew" library="md" className="text-xl" />
            </button>
        </div>
    );
};

export default Project;
