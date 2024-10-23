import { Dispatch, SetStateAction } from "react";
import Icons from "services/Icons";

interface CreateProjectButtonProps {
    showModal: Dispatch<SetStateAction<boolean>>;
}

const CreateProjectButton = ({ showModal }: CreateProjectButtonProps) => {
    const style =
        "flex w-3/4 h-3/4 flex-row items-center justify-center gap-6 bg-base-200 rounded-btn border-primary bg-[url('data:image/svg+xml,%3csvg%20width%3d%22100%25%22%20height%3d%22100%25%22%20xmlns%3d%22http%3a//www.w3.org/2000/svg%22%3e%3crect%20width%3d%22100%25%22%20height%3d%22100%25%22%20fill%3d%22none%22%20rx%3d%225%22%20ry%3d%225%22%20stroke%3d%22%23333%22%20stroke-width%3d%222%22%20stroke-dasharray%3d%226%2c%2020%22%20stroke-dashoffset%3d%220%22%20stroke-linecap%3d%22square%22/%3e%3c/svg%3e')]";

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
