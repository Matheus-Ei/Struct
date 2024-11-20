// Libraries
import {
    Dispatch,
    SetStateAction,
    useContext,
    useEffect,
    useState,
} from "react";

// Local
import { projectsContext } from "pages/Dashboard/Projects";
import Request from "services/Request";
import Button from "components/Button";
import Modal from "components/Modal";
import Input from "components/Input";
import { ErrorType } from "types/global";
import clsx from "clsx";

interface CreateProjectModalProps {
    showModal: boolean;
    setModal: Dispatch<SetStateAction<boolean>>;
}

const CreateProjectModal = ({
    showModal,
    setModal,
}: CreateProjectModalProps) => {
    const context = useContext(projectsContext);

    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");

    // Error handling
    const [descError, setDescError] = useState<ErrorType>({
        message: "",
        isError: false,
    });
    const [titleError, setTitleError] = useState<ErrorType>({
        message: "",
        isError: false,
    });

    // Reset the inputs when the modal is closed
    useEffect(() => {
        setTitle("");
        setDescription("");
        setTitleError({ message: "", isError: false });
        setDescError({ message: "", isError: false });
    }, [showModal]);

    const handleCreate = () => {
        if (!title) {
            setTitleError({ message: "The title is required", isError: true });
            return;
        }
        setTitleError({ message: "", isError: false });

        if (!description) {
            setDescError({
                message: "The description is required",
                isError: true,
            });
            return;
        }
        setDescError({ message: "", isError: false });

        Request.post("project/create", {
            title,
            description,
        }).then(() => {
            setModal(false);
            context?.refetch();
        });
    };

    const handleClose = () => setModal(false);

    // Styles
    const modalCss = clsx(
        "relative w-[65vw] h-[50vh]",
        "flex flex-col items-start justify-start"
    );
    const descriptionCss = clsx(
        "h-96 w-[95%] pl-4 mb-3 pt-4",
        "border rounded-btn outline-none resize-none",
        "bg-base-100 text-base-content",
        {
            "border-error": descError.isError,
            "border-neutral": !descError.isError,
        }
    );
    const bodyCss = clsx(
        "w-full h-full gap-4",
        "flex flex-col items-center justify-center"
    );
    const inputsCss = clsx(
        "w-full h-4/6",
        "flex flex-col items-center justify-center"
    );
    const headerCss = "w-full font-bold text-2xl text-center mb-5";

    return (
        <Modal isOpen={showModal} close={handleClose} className={modalCss}>
            <div className={bodyCss}>
                <h1 className={headerCss}>New project</h1>

                <div className={inputsCss}>
                    <Input
                        text="Title"
                        type="textarea"
                        setValue={setTitle}
                        error={titleError}
                    />

                    <Input
                        text="Description"
                        type="textarea"
                        className={descriptionCss}
                        setValue={setDescription}
                        error={descError}
                    />
                </div>

                <Button text="Create" inverse={true} onClick={handleCreate} />
            </div>
        </Modal>
    );
};

export default CreateProjectModal;
