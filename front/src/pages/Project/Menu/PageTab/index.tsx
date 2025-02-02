// Libraries
import { MouseEvent, useState } from 'react';

// Local
import PageMenu from './PageMenu';
import { PageType } from 'services/page/types';
import Hover from './HoverButtons';
import useToggle from 'hooks/useToggle';
import Childrens from './Childrens';
import Content from './Content';
import { PageTabContext } from './context';

interface PageTabProps {
  item: PageType;
}

const PageTab = ({ item }: PageTabProps) => {
  // States
  const [isHover, toggleHover] = useToggle(false);

  // Children
  const [showChildren, toggleChildren] = useToggle(false);

  // Context menu
  const [showMenu, toggleMenu] = useToggle(false);
  const [clickPosition, setClickPosition] = useState({ x: 0, y: 0 });

  const openContextMenu = (event: MouseEvent) => {
    event.preventDefault();
    setClickPosition({ x: event.clientX, y: event.clientY });
    toggleMenu(true);
  };

  const contextValue = {
    menu: { show: showMenu, toggle: toggleMenu },
    children: { show: showChildren, toggle: toggleChildren },
    isHover,
    clickPosition: { value: clickPosition, set: setClickPosition },
    page: item,
  };

  return (
    <PageTabContext.Provider value={contextValue}>
      <div
        className='flex flex-col relative w-full h-9 justify-start items-center'
        onMouseOver={() => toggleHover(true)}
        onMouseLeave={() => toggleHover(false)}
      >
        <Content
          onContextMenu={openContextMenu}
          childrens={item.child_pages}
        />

        <Hover />

        <PageMenu />
      </div>

      <Childrens />
    </PageTabContext.Provider>
  );
};

export default PageTab;
