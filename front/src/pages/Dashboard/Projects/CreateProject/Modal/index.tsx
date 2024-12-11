// Libraries
import { useEffect, useState } from "react";
import clsx from "clsx";

// Local
import { ErrorType, SetStateType } from "types/global";

// Components
import Modal from "components/Modal";
import { CreateProjectContext } from "./context";
import CreateButton from "./CreateButton";
import InputFields from "./InputFields";

interface CreateProjectModalProps {
    showModal: boolean;
    setModal: SetStateType<boolean>;
}

// Styles
const bodyCss = clsx(
    "w-full h-full py-14",
    "flex flex-col items-center justify-center"
);

const CreateProjectModal = ({
    showModal,
    setModal,
}: CreateProjectModalProps) => {
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

    const contextValue = {
        title: {
            value: title,
            set: setTitle,
            error: titleError,
            setError: setTitleError,
        },
        description: {
            value: description,
            set: setDescription,
            error: descError,
            setError: setDescriptionError,
        },
        setModal,
    };

    return (
        <CreateProjectContext.Provider value={contextValue}>
            <Modal
                isOpen={showModal}
                onClose={() => setModal(false)}
                className="sm:w-[30vw] sm:h-[40rem]"
            >
                <div className={bodyCss}>
                    <InputFields />

                    <CreateButton />
                </div>
            </Modal>
        </CreateProjectContext.Provider>
    );
};

export default CreateProjectModal;
