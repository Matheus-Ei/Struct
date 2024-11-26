// Libraries
import clsx from "clsx";

// Local
import Icons from "modules/Icons";
import { SetStateType } from "types/global";

interface CreateProjectButtonProps {
    showModal: SetStateType<boolean>;
}

const buttonCss = clsx(
    "w-56 h-16",
    "flex items-center justify-center",
    "gap-6",
    "bg-base-200 rounded-btn border-2 border-dashed border-primary"
);

const CreateProject = ({ showModal }: CreateProjectButtonProps) => {
    const handleOpen = () => showModal(true);

    return (
        <div className="flex w-96 h-32 p-3 justify-start items-center">
            <button onClick={handleOpen} className={buttonCss}>
                <Icons name="IoAdd" library="io5" className="text-2xl" />
                <h1>New project</h1>
            </button>
        </div>
    );
};

export default CreateProject;
