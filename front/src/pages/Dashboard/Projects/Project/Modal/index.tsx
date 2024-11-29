// Libraries
import { createElement, useState } from "react";

// Types
import { SetStateType } from "types/global";
import { ModalType } from "./utils/types";
import { TabProps } from "./utils/types";
import Modal from "components/Modal";

// Local
import router from "./utils/router";
import Footer from "./Footer";
import Header from "./Header";

interface ProjectModalProps {
    modal: ModalType;
    setModal: SetStateType<ModalType>;
}

const ProjectModal = ({ modal, setModal }: ProjectModalProps) => {
    const [tab, setTab] = useState<string>("About");

    const handleClose = () => {
        setModal({ show: false, projectId: 1 });
        setTab("About");
    };

    const renderTab = (
        item: [string, (arg0: TabProps) => JSX.Element | null],
        index: number
    ) => {
        if (tab !== item[0]) return null;

        return createElement(item[1], {
            key: index,
            projectId: modal.projectId,
            setModal,
        });
    };

    return (
        <Modal isOpen={modal.show} close={handleClose}>
            <div className="w-full h-full">
                <Header tab={tab} setTab={setTab} />

                {router.map(renderTab)}

                <Footer id={modal.projectId} />
            </div>
        </Modal>
    );
};

export default ProjectModal;
