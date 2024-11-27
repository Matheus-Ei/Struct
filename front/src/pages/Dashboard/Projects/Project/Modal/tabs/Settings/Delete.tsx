// Libraries
import { useContext, useEffect } from "react";

// Local
import { ProjectsContext } from "pages/Dashboard/Projects";
import Point from "components/Point";
import useToggle from "hooks/useToggle";
import ConfirmModal from "components/ConfirmModal";
import { SetStateType } from "types/global";
import Project from "services/project";

interface DeleteProps {
    projectId: number;
    setModal: SetStateType<{ projectId: number; show: boolean }>;
}

const Delete = ({ projectId, setModal }: DeleteProps) => {
    const context = useContext(ProjectsContext);

    const [wantDelete, toggleWantDelete] = useToggle(false);
    const [showConfirmDelete, toggleShowConfirmDelete] = useToggle(false);

    // Delete project when user confirms
    useEffect(() => {
        if (!wantDelete) return;

        Project.delete(projectId, () => {
            setModal({ projectId: 1, show: false });
            context?.refetch();
        });
    }, [wantDelete, context, projectId, setModal]);

    return (
        <div className="flex w-fit flex-col items-start">
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

export default Delete;
