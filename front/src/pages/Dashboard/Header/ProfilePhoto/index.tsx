// Local
import Icon from 'components/Icon';
import useToggle from 'hooks/useToggle';
import Menu from './Menu';
import useElementPosition from 'hooks/useElementPosition';
import Image from 'components/Image';
import Account from 'services/account';
import { useState } from 'react';

const ProfilePhoto = () => {
  const [showMenu, toggleMenu] = useToggle(false);

  const [picture, setPicture] = useState<Buffer | null | undefined>(null);
  Account.get().then((res) => setPicture(res?.pictureData));

  const openOptions = () => toggleMenu();
  const { ref: menuRef, position } = useElementPosition<HTMLDivElement>();

  return (
    <div
      className='flex flex-row w-fit h-full items-center justify-end'
      ref={menuRef}
    >
      <Image
        src={picture}
        className={{ container: 'w-14 h-14' }}
        onClick={openOptions}
      />

      <Menu
        showMenu={showMenu}
        toggleShowMenu={toggleMenu}
        position={{ x: position.left, y: position.bottom }}
      />
    </div>
  );
};

export default ProfilePhoto;
