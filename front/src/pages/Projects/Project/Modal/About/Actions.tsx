import Point from "components/Point";
import { projectsContext } from "pages/Projects";
import { Dispatch, SetStateAction, useContext } from "react";
import Request from "services/Request";

interface ModalType {
    show: boolean;
    projectId: number;
}

interface ActionsProps {
    id: number;
    setModal: Dispatch<SetStateAction<ModalType>>;
}

const Actions = ({ id, setModal }: ActionsProps) => {
    const context = useContext(projectsContext);

    const deleteProject = () => {
        Request.delete(`project/delete/${id}`).then(() => {
            setModal({ projectId: 1, show: false });
            context?.refresh();
        });
    };

    return (
        <div className="flex w-full flex-col items-start">
            <div className="divider divider-primary w-2/6">Actions</div>
            <Point
                icon="MdDelete"
                library="md"
                text="Delete"
                onClick={deleteProject}
            />
        </div>
    );
};

export default Actions;
