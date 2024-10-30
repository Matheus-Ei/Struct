import Button from "components/Button";
import Modal from "components/Modal";
import { projectsContext } from "pages/Projects";
import { Dispatch, SetStateAction, useContext, useState } from "react";
import Request from "services/Request";
import Options from "./Options";
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
    const [module, setModule] = useState<string>("notes");
    const [type, setType] = useState<string>("");

    const handleCreate = () => {
        Request.post("project/create", {
            title,
            description,
            type: type.toLowerCase(),
            modules: [module.toLowerCase()],
        }).then(() => {
            setModal(false);
            context?.refresh();
        });
    };

    const handleClose = () => {
        setModal(false);
    };

    return (
        <Modal isOpen={showModal} close={handleClose}>
            <div className="flex flex-col items-center gap-10 justify-center w-full h-full">
                <h1 className="pl-10 w-full font-bold text-2xl">New project</h1>

                <div className="flex flex-row items-center justify-center w-full h-3/5">
                    <TextFields
                        setTitle={setTitle}
                        setDescription={setDescription}
                    />

                    <Options
                        setModule={setModule}
                        setType={setType}
                        type={type}
                    />
                </div>

                <Button text="Create" inverse={true} onClick={handleCreate} />
            </div>
        </Modal>
    );
};

export default CreateProjectModal;
