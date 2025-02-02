// Local
import { useAllPages } from 'services/page/usePage';
import { TabProps } from '../../utils/types';

// Components
import AddPage from './AddPage';
import PagesGrid from './PagesGrid';

const Pages = ({ projectId }: TabProps) => {
  const { data: pages, refetch } = useAllPages(projectId);

  return (
    <div className='w-full h-5/6 flex justify-center'>
      <PagesGrid pages={pages} refetch={refetch} />

      <AddPage projectId={projectId} refetch={refetch} />
    </div>
  );
};

export default Pages;
