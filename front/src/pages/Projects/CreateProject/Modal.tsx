// Components
import Button from "components/Button";
import Checkbox from "components/Checkbox";
import Input from "components/Input";
import Modal from "components/Modal";
import Selector from "components/Selector";

// Libraries
import { Dispatch, SetStateAction, useState } from "react";
import Request from "services/Request";

interface CreateProjectModalProps {
    showModal: boolean;
    setModal: Dispatch<SetStateAction<boolean>>;
}

const CreateProjectModal = ({
    showModal,
    setModal,
}: CreateProjectModalProps) => {
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
        }).then(() => setModal(false));
    };

    return (
        <Modal
            isOpen={showModal}
            close={() => {
                setModal(false);
            }}
        >
            <div className="flex flex-col items-center gap-10 justify-center w-full h-full">
                <h1 className="pl-10 w-full font-bold text-2xl">New project</h1>

                <div className="flex flex-row items-center justify-center w-full h-3/5">
                    <div className="flex flex-col items-center justify-center w-3/4 h-full">
                        <Input
                            text="Title"
                            type="textarea"
                            setValue={setTitle}
                        />

                        <Input
                            text="Description"
                            type="textarea"
                            style="border rounded-btn h-96 w-[95%] pl-4 border-base-content mb-3 bg-base-100 text-base-content pt-4 resize-none"
                            setValue={setDescription}
                        />
                    </div>

                    <div className="flex flex-col items-center justify-center w-1/4 h-full gap-12">
                        <div className="flex flex-row items-center justify-center w-full h-fit">
                            <Selector
                                options={["Notes"]}
                                setCurrent={setModule}
                            />
                        </div>

                        <div className="flex flex-row items-center justify-center w-full h-fit gap-4">
                            <Checkbox
                                text="Singular"
                                group="type"
                                checked={type}
                                setChecked={setType}
                            />

                            <Checkbox
                                text="Compost"
                                group="type"
                                checked={type}
                                setChecked={setType}
                            />

                            <Checkbox
                                text="Mono"
                                group="type"
                                checked={type}
                                setChecked={setType}
                            />
                        </div>
                    </div>
                </div>

                <Button text="Create" inverse={true} onClick={handleCreate} />
            </div>
        </Modal>
    );
};

export default CreateProjectModal;
