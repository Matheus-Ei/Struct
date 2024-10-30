// Components
import Modal from "components/Modal";

// Libraries
import { Dispatch, SetStateAction, useState } from "react";
import About from "./About";
import Footer from "./Footer";
import Header from "./Header";
import Pages from "./Pages";

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

    const getTab = () => {
        switch (tab) {
            case "About":
                return <About />;
            case "Pages":
                return <Pages />;
        }
    };

    return (
        <Modal
            isOpen={modal.show}
            close={() => {
                setModal({ show: false, projectId: 0 });
            }}
        >
            <div>
                <Header tab={tab} setTab={setTab} />

                {getTab()}

                <Footer />
            </div>
        </Modal>
    );
};

export default ProjectModal;
