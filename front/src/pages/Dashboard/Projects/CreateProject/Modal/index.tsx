import Button from "components/Button";
import Modal from "components/Modal";
import { projectsContext } from "pages/Dashboard/Projects";
import { Dispatch, SetStateAction, useContext, useState } from "react";
import Request from "services/Request";
import TextFields from "./TextFields";

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

    const handleCreate = () => {
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

                <div className="flex flex-row items-center justify-center w-full h-3/5">
                    <TextFields
                        setTitle={setTitle}
                        setDescription={setDescription}
                    />
                </div>

                <Button text="Create" inverse={true} onClick={handleCreate} />
            </div>
        </Modal>
    );
};

export default CreateProjectModal;
