// Local
import useToggle from 'hooks/useToggle';
import Menu from './Menu';
import useElementPosition from 'hooks/useElementPosition';
import Image from 'components/Image';
import { useAccount } from 'services/account/useAccount';

const ProfilePhoto = () => {
  const [showMenu, toggleMenu] = useToggle(false);

  const { data: account } = useAccount();

  const openOptions = () => toggleMenu();
  const { ref: menuRef, position } = useElementPosition<HTMLDivElement>();

  return (
    <div
      className='flex flex-row w-fit h-full items-center justify-end'
      ref={menuRef}
    >
      <Image
        src={account?.pictureData}
        className={{ container: 'w-24 h-24 sm:w-14 sm:h-14' }}
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
