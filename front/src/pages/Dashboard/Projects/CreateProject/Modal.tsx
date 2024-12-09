// Libraries
import { useEffect, useState } from "react";
import clsx from "clsx";

// Local
import useDefinedContext from "hooks/useDefinedContext";
import { ProjectsContext } from "pages/Dashboard/Projects";
import { ErrorType, SetStateType } from "types/global";
import Project from "services/project";

// Components
import Button from "components/Button";
import Modal from "components/Modal";
import Input from "components/Input";

interface CreateProjectModalProps {
    showModal: boolean;
    setModal: SetStateType<boolean>;
}

// Styles
const modalCss = clsx(
    "relative w-screen h-screen sm:w-[30vw] sm:h-[40rem]",
    "flex flex-col items-start justify-start"
);
const bodyCss = clsx(
    "w-full h-full py-14",
    "flex flex-col items-center justify-center"
);

const headerCss = "absolute top-0 left-6 font-bold text-2xl text-center";

const CreateProjectModal = ({
    showModal,
    setModal,
}: CreateProjectModalProps) => {
    const { refetch } = useDefinedContext(ProjectsContext);

    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");

    // Error handling
    const [descError, setDescriptionError] = useState<ErrorType>({
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
        setDescriptionError({ message: "", isError: false });
    }, [showModal]);

    const handleCreate = async () => {
        if (!title) {
            setTitleError({ message: "The title is required", isError: true });
            return;
        }
        setTitleError({ message: "", isError: false });

        if (!description) {
            setDescriptionError({
                message: "The description is required",
                isError: true,
            });
            return;
        }
        setDescriptionError({ message: "", isError: false });

        await Project.create(title, description, () => {
            setModal(false);
            refetch();
        });
    };

    const handleClose = () => setModal(false);

    const descriptionCss = clsx(
        "h-full w-[95%] pl-4 mb-3 pt-4",
        "border rounded-btn outline-none resize-none",
        "bg-base-100 text-base-content",
        {
            "border-error": descError.isError,
            "border-neutral": !descError.isError,
        }
    );

    return (
        <Modal isOpen={showModal} onClose={handleClose} className={modalCss}>
            <div className={bodyCss}>
                <h1 className={headerCss}>New project</h1>

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

                <div className="absolute bottom-0">
                    <Button
                        text="Create"
                        inverse={true}
                        onClick={handleCreate}
                    />
                </div>
            </div>
        </Modal>
    );
};

export default CreateProjectModal;
