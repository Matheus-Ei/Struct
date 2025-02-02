// Library
import { useNavigate } from 'react-router-dom';

// Local
import ContextMenu from 'components/ContextMenu';
import Point from 'components/Point';

interface MenuProps {
  showMenu: boolean;
  toggleShowMenu: (value?: boolean) => void;
  position: { x: number; y: number };
}

const Menu = ({ showMenu, toggleShowMenu, position }: MenuProps) => {
  const navigate = useNavigate();

  const goSettings = () => navigate('/settings');
  const goProfile = () => navigate('/profile');

  const menuStyle = { location: { x: position.x - 150, y: position.y - 40 } };

  return (
    <ContextMenu
      onClose={() => toggleShowMenu(false)}
      show={showMenu}
      style={menuStyle}
    >
      <div className='flex flex-col items-start justify-center gap-y-1'>
        <Point
          icon={{ name: 'FaUser', library: 'fa6' }}
          text='Profile'
          className='m-0 p-0'
          onClick={goProfile}
        />

        <Point
          icon={{ name: 'IoMdSettings', library: 'io' }}
          text='Settings'
          className='m-0 p-0'
          onClick={goSettings}
        />
      </div>
    </ContextMenu>
  );
};

export default Menu;
