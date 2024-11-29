// Local
import { SetStateType } from "types/global";

export interface ModalType {
    show: boolean;
    projectId: number;
}

export interface TabProps {
    projectId: number;
    setModal: SetStateType<ModalType>;
}
