// Libraries
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

    return (
        <div className="flex w-96 h-32 p-3 justify-start items-center">
            <button
                onClick={handleOpen}
                className="flex h-16 w-56 flex-row items-center justify-center gap-6 bg-base-200 rounded-btn border-2 border-dashed border-primary"
            >
                <Icons name="IoAdd" library="io5" size={25} />
                <h1>New project</h1>
            </button>
        </div>
    );
};

export default CreateProject;
