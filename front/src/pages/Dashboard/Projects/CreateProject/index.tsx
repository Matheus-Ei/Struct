// Libraries
import clsx from "clsx";
import { Dispatch, SetStateAction } from "react";

// Local
import Icons from "services/Icons";

interface CreateProjectButtonProps {
    showModal: Dispatch<SetStateAction<boolean>>;
}

const CreateProject = ({ showModal }: CreateProjectButtonProps) => {
    const handleOpen = () => {
        showModal(true);
    };

    const buttonCss = clsx(
        "w-56 h-16",
        "flex items-center justify-center",
        "gap-6",
        "bg-base-200 rounded-btn border-2 border-dashed border-primary"
    );

    return (
        <div className="flex w-96 h-32 p-3 justify-start items-center">
            <button onClick={handleOpen} className={buttonCss}>
                <Icons name="IoAdd" library="io5" size={25} />
                <h1>New project</h1>
            </button>
        </div>
    );
};

export default CreateProject;
