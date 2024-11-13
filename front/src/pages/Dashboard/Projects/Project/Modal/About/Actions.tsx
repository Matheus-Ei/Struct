// Libraries
import { Dispatch, SetStateAction, useContext } from "react";

// Local
import { projectsContext } from "pages/Dashboard/Projects";
import Request from "services/Request";
import Point from "components/Point";

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
        const wantDelete = window.confirm(
            "Are you sure that you want to delete this project?"
        );

        if (!wantDelete) {
            return;
        }

        Request.delete(`project/delete/${id}`).then(() => {
            setModal({ projectId: 1, show: false });
            context?.refetch();
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
