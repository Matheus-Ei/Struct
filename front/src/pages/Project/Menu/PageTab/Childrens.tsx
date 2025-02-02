// Local
import useSafeContext from 'hooks/useSafeContext';
import { PageType } from 'services/page/types';
import PageTab from '.';
import { PageTabContext } from './context';

const renderChildrens = (item: PageType, index: number) => (
  <PageTab item={item} key={index} />
);

const Childrens = () => {
  const { page, children } = useSafeContext(PageTabContext);

  if (!children.show) return null;

  return (
    <div className='flex flex-col relative w-full justify-start'>
      <div className='flex flex-col pl-4'>
        {page.child_pages?.map(renderChildrens)}
      </div>
    </div>
  );
};

export default Childrens;
