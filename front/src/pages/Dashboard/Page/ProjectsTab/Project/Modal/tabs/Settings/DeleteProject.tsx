// Libraries
import { useEffect } from "react";

// Local
import { ProjectsContext } from "pages/Dashboard/Page/ProjectsTab/context";
import { SetStateType } from "types/global";
import useToggle from "hooks/useToggle";
import Project from "services/project";
import ConfirmModal from "components/ConfirmModal";
import Point from "components/Point";
import useSafeContext from "hooks/useSafeContext";

interface DeleteProps {
    projectId: number;
    setModal: SetStateType<{ projectId: number; show: boolean }>;
}

const DeleteProject = ({ projectId, setModal }: DeleteProps) => {
    const { refetch } = useSafeContext(ProjectsContext);

    const [wantDelete, toggleWantDelete] = useToggle(false);
    const [showConfirmDelete, toggleShowConfirmDelete] = useToggle(false);

    // Delete project when user confirms
    useEffect(() => {
        if (!wantDelete) return;

        Project.delete(projectId).then(() => {
            setModal({ projectId: 1, show: false });
            refetch();
        });
    }, [wantDelete, refetch, projectId, setModal]);

    return (
        <div className="flex w-fit flex-col items-start">
            <ConfirmModal
                message="Are you sure you want to delete?"
                isOpen={showConfirmDelete}
                onClose={() => toggleShowConfirmDelete(false)}
                onConfirm={() => toggleWantDelete(true)}
            />

            <Point
                icon={{ name: "MdDelete", library: "md" }}
                text="Delete"
                onClick={() => toggleShowConfirmDelete(true)}
            />
        </div>
    );
};

export default DeleteProject;
