// Libraries
import { Dispatch, SetStateAction, useState } from "react";

// Local
import Modal from "components/Modal";
import Footer from "./Footer";
import Header from "./Header";
import About from "./About";
import Pages from "./Pages";
import Shared from "./Shared";
import Settings from "./Settings";

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
                return (
                    <About projectId={modal.projectId} setModal={setModal} />
                );
            case "Pages":
                return (
                    <Pages projectId={modal.projectId} setModal={setModal} />
                );
            case "Shared":
                return (
                    <Shared projectId={modal.projectId} setModal={setModal} />
                );
            case "Settings":
                return (
                    <Settings projectId={modal.projectId} setModal={setModal} />
                );
        }
    };

    return (
        <Modal isOpen={modal.show} close={handleClose}>
            <div className="relative w-full h-full">
                <Header tab={tab} setTab={setTab} />

                {getTab()}

                <Footer id={modal.projectId} />
            </div>
        </Modal>
    );
};

export default ProjectModal;
