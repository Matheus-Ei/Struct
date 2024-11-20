// Libraries
import { Dispatch, SetStateAction, useContext, useEffect } from "react";

// Local
import { projectsContext } from "pages/Dashboard/Projects";
import Request from "services/Request";
import Point from "components/Point";
import useToggle from "hooks/useToggle";
import ConfirmModal from "components/ConfirmModal";

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
    const [wantDelete, toggleWantDelete] = useToggle(false);
    const [showConfirmDelete, toggleShowConfirmDelete] = useToggle(false);

    // Delete project when user confirms
    useEffect(() => {
        if (!wantDelete) return;

        Request.delete(`project/delete/${id}`).then(() => {
            setModal({ projectId: 1, show: false });
            context?.refetch();
        });
    }, [wantDelete, context, id, setModal]);

    return (
        <div className="flex w-full flex-col items-start">
            <div className="divider divider-primary w-2/6">Actions</div>

            <ConfirmModal
                message="Are you sure you want to delete?"
                isOpen={showConfirmDelete}
                close={() => toggleShowConfirmDelete(false)}
                onConfirm={() => toggleWantDelete(true)}
            />
            <Point
                icon="MdDelete"
                library="md"
                text="Delete"
                onClick={() => toggleShowConfirmDelete(true)}
            />
        </div>
    );
};

export default Actions;
