// Components
import Modal from "components/Modal";

// Libraries
import { Dispatch, SetStateAction } from "react";

interface ModalType {
    show: boolean;
    projectId: number;
}

interface ProjectModalProps {
    modal: ModalType;
    setModal: Dispatch<SetStateAction<ModalType>>;
}

const ProjectModal = ({ modal, setModal }: ProjectModalProps) => {
    return (
        <Modal
            isOpen={modal.show}
            close={() => {
                setModal({ show: false, projectId: 0 });
            }}
        >
            <div></div>
        </Modal>
    );
};

export default ProjectModal;
