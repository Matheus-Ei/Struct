import Button from "components/Button";
import Input from "components/Input";
import Modal from "components/Modal";
import { Dispatch, SetStateAction } from "react";

interface CreateProjectModalProps {
    showModal: boolean;
    setModal: Dispatch<SetStateAction<boolean>>;
}

const CreateProjectModal = ({
    showModal,
    setModal,
}: CreateProjectModalProps) => {
    return (
        <Modal
            isOpen={showModal}
            close={() => {
                setModal(false);
            }}
        >
            <div className="flex flex-col items-center gap-10 justify-center w-full h-full">
                <h1 className="pl-6 w-full font-bold text-2xl">New project</h1>

                <div className="flex flex-row items-center justify-center w-full h-3/5">
                    <div className="flex flex-col items-center justify-center w-2/4 h-full">
                        <Input text="Title" type="textarea" />
                        <Input
                            text="Description"
                            type="textarea"
                            style="border rounded-btn h-96 w-[95%] pl-4 border-base-content mb-3 bg-base-100 text-base-content pt-4 resize-none"
                        />
                    </div>

                    <div className="flex flex-col items-center justify-center w-2/4 h-full"></div>
                </div>

                <Button text="Create" inverse={true} />
            </div>
        </Modal>
    );
};

export default CreateProjectModal;
