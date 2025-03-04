// Libraries
import { MouseEvent } from 'react';
import clsx from 'clsx';

// Local
import { PageType } from 'services/page/types';
import { ProjectContext } from 'pages/Project/context';
import useSafeContext from 'hooks/useSafeContext';
import { PageTabContext } from '../context';
import PageIcon from './PageIcon';

interface ContentProps {
  childrens: Array<PageType> | null;
  onContextMenu: (event: MouseEvent) => void;
}

const Content = ({ childrens, onContextMenu }: ContentProps) => {
  const { selectedPage } = useSafeContext(ProjectContext);
  const { page } = useSafeContext(PageTabContext);

  const isSelected = page.id === selectedPage.id;

  const css = clsx(
    'w-full h-full gap-x-2 rounded-btn py-1 px-4',
    'flex flex-row justify-start items-center text-start',
    'cursor-pointer select-none',
    {
      'bg-primary text-primary-content': isSelected,
    },
  );

  return (
    <div
      className={css}
      onContextMenu={onContextMenu}
      onClick={() => selectedPage.set(page.id)}
    >
      <PageIcon childrens={childrens} />

      <h1 className='line-clamp-1 w-full text-sm'>{page.title}</h1>
    </div>
  );
};

export default Content;
