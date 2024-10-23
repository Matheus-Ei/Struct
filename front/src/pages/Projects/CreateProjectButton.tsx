import { Dispatch, SetStateAction } from "react";
import Icons from "services/Icons";

interface CreateProjectButtonProps {
    showModal: Dispatch<SetStateAction<boolean>>;
}

const CreateProjectButton = ({ showModal }: CreateProjectButtonProps) => {
    const style =
        "flex w-2/4 h-2/4 flex-row items-center justify-center gap-6 bg-base-200 rounded-btn border-2 border-dashed border-primary";

    return (
        <button
            onClick={() => {
                showModal(true);
            }}
            className={style}
        >
            <Icons name="IoAdd" library="io5" size={25} />
            <h1>New project</h1>
        </button>
    );
};

export default CreateProjectButton;
