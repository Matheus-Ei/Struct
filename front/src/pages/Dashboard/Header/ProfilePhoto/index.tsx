// Local
import Icon from 'components/Icon';
import useToggle from 'hooks/useToggle';
import Menu from './Menu';
import useElementPosition from 'hooks/useElementPosition';

const ProfilePhoto = () => {
  const [showMenu, toggleMenu] = useToggle(false);

  const openOptions = () => toggleMenu();

  const { ref: menuRef, position } = useElementPosition<HTMLDivElement>();

  return (
    <div
      className='flex flex-row w-fit h-full items-center justify-end'
      ref={menuRef}
    >
      <Icon
        value={{ name: 'FaUserAstronaut', library: 'fa' }}
        className='text-4xl'
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
