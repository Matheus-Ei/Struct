// Local
import { useProjectShare } from 'services/project/share/useShare';
import { TabProps } from '../../utils/types';
import NewShare from 'services/project/share/Add';
import AccountsGrid from './AccountGrid';

const Shared = ({ projectId }: TabProps) => {
  const { data: accounts, refetch } = useProjectShare(String(projectId));

  return (
    <div className='w-full h-5/6 flex justify-center'>
      <AccountsGrid accounts={accounts} refetch={refetch} />

      <div className='absolute bottom-2 right-2'>
        <NewShare projectId={String(projectId)} refetch={refetch} />
      </div>
    </div>
  );
};

export default Shared;
