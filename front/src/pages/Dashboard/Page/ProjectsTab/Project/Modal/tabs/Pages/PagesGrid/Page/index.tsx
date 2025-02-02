// Local
import useToggle from 'hooks/useToggle';
import { MouseEvent, useState } from 'react';
import EmojiInput from './EmojiInput';
import Menu from './Menu';
import NameInput from './NameInput';

interface PageProps {
  id: number;
  name: string;
  emoji: string | undefined;
  refetch: () => void;
}

const Page = ({ id, name, emoji, refetch }: PageProps) => {
  const [showMenu, toggleShowMenu] = useToggle(false);
  const [clickPosition, setClickPosition] = useState({ x: 0, y: 0 });

  const openContextMenu = (event: MouseEvent) => {
    event?.preventDefault();
    setClickPosition({ x: event.clientX, y: event.clientY });
    toggleShowMenu(true);
  };

  return (
    <div className='flex gap-x-4 items-center' onContextMenu={openContextMenu}>
      <EmojiInput pageId={id} emoji={emoji} />
      <NameInput pageId={id} name={name} />

      <Menu
        show={showMenu}
        toggleShow={toggleShowMenu}
        position={clickPosition}
        pageId={id}
        refetch={refetch}
      />
    </div>
  );
};

export default Page;
