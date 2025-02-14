// Local
import useSafeContext from 'hooks/useSafeContext';
import { ProjectContext } from 'pages/Project/context';
import Modal from 'components/Modal';

// Services
import NewShare from 'services/project/share/Add';
import { useProjectShare } from 'services/project/share/useShare';
import AccountsLayout from './AccountsLayout';

interface ShareModalProps {
  isOpen: boolean;
  toggleOpen: (isOpen: boolean) => void;
}

const ShareModal = ({ isOpen, toggleOpen }: ShareModalProps) => {
  const { projectId } = useSafeContext(ProjectContext);

  const { data: rawShares, refetch: refetchUsers } = useProjectShare(projectId);

  return (
    <Modal
      isOpen={isOpen}
      onClose={() => toggleOpen(false)}
      className='pb-4 sm:pb-0 sm:h-[80vh] sm:w-[60vw] md:w-[50vw] lg:w-[35vw] xl:w-[30vw] 2xl:w-[25vw] 2xl:h-[60vh]'
    >
      <div className='flex flex-col w-full h-full items-center justify-between'>
        <AccountsLayout refetch={refetchUsers} rawShares={rawShares} />

        <NewShare projectId={projectId} refetch={refetchUsers} />
      </div>
    </Modal>
  );
};

export default ShareModal;
