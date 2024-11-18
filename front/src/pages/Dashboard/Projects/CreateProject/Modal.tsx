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

interface CreateProjectModalProps {
    showModal: boolean;
    setModal: Dispatch<SetStateAction<boolean>>;
}

interface ErrorType {
    message: string;
    isError: boolean;
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

    const handleClose = () => {
        setModal(false);
    };

    const descriptionErrorStyle = descError.isError
        ? "border-error"
        : "border-neutral";

    return (
        <Modal
            isOpen={showModal}
            close={handleClose}
            className="relative w-[65vw] h-[60vh] flex flex-col items-start justify-start"
        >
            <div className="flex flex-col items-center gap-4 justify-center w-full h-full">
                <h1 className="w-full font-bold text-2xl text-center my-5">
                    New project
                </h1>

                <div className="flex flex-col items-center justify-center w-full h-3/5">
                    <Input
                        text="Title"
                        type="textarea"
                        setValue={setTitle}
                        error={titleError}
                    />

                    <Input
                        text="Description"
                        type="textarea"
                        className={
                            "border rounded-btn h-96 w-[95%] outline-none pl-4 mb-3 bg-base-100 text-base-content pt-4 resize-none " +
                            descriptionErrorStyle
                        }
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
