import Modal from "components/Modal";
import About from "./About";
import Footer from "./Footer";
import Header from "./Header";
import Pages from "./Pages";
import { Dispatch, SetStateAction, useState } from "react";

interface ModalType {
    show: boolean;
    projectId: number;
}

interface ProjectModalProps {
    modal: ModalType;
    setModal: Dispatch<SetStateAction<ModalType>>;
}

const ProjectModal = ({ modal, setModal }: ProjectModalProps) => {
    const [tab, setTab] = useState<string>("About");

    const handleClose = () => {
        setModal({ show: false, projectId: 1 });
    };

    const getTab = () => {
        switch (tab) {
            case "About":
                return <About id={modal.projectId} setModal={setModal} />;
            case "Pages":
                return <Pages />;
        }
    };

    return (
        <Modal isOpen={modal.show} close={handleClose}>
            <div className="w-full h-full">
                <Header tab={tab} setTab={setTab} />

                {getTab()}

                <Footer id={modal.projectId} />
            </div>
        </Modal>
    );
};

export default ProjectModal;
