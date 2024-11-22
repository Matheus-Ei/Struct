// Libraries
import { createElement, useState } from "react";

// Local
import Modal from "components/Modal";
import Footer from "./Footer";
import Header from "./Header";
import { ModalType } from "./utils/types";
import { SetStateType } from "types/global";
import router from "./utils/router";
import { TabProps } from "./utils/types";

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
