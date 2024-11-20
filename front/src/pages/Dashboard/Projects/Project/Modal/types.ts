import { Dispatch, SetStateAction } from "react";

export interface ModalType {
    show: boolean;
    projectId: number;
}

export interface TabProps {
    projectId: number;
    setModal: Dispatch<SetStateAction<ModalType>>;
}
