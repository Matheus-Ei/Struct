// Local
import useDefinedContext from "hooks/useDefinedContext";
import { ProjectContext } from "pages/Project/context";
import Modal from "components/Modal";

// Services
import AddUser from "services/project/share/Add";
import { useProjectShare } from "services/project/share/useShare";
import UsersLayout from "./UsersLayout";

interface ShareModalProps {
    isOpen: boolean;
    toggleOpen: (isOpen: boolean) => void;
}

const ShareModal = ({ isOpen, toggleOpen }: ShareModalProps) => {
    const { projectId } = useDefinedContext(ProjectContext);

    const { data: rawShares, refetch: refetchUsers } =
        useProjectShare(projectId);

    return (
        <Modal
            isOpen={isOpen}
            onClose={() => toggleOpen(false)}
            className="pb-4 sm:pb-0 sm:h-[40rem] sm:w-[60vw] md:w-[50vw] lg:w-[35vw] xl:w-[30vw] 2xl:w-[25vw]"
        >
            <div className="flex flex-col w-full h-full items-center justify-between">
                <UsersLayout refetch={refetchUsers} rawShares={rawShares} />

                <AddUser projectId={projectId} refetch={refetchUsers} />
            </div>
        </Modal>
    );
};

export default ShareModal;
