// Local
import ContextMenu from 'components/ContextMenu';

interface MenuProps {
  show: boolean;
  onClose: () => void;
}
const Menu = ({ show, onClose }: MenuProps) => {
  if (!show) return null;

  return (
    <ContextMenu
      show={show}
      onClose={onClose}
      style={{ location: { x: 15, y: 15 }, position: 'absolute' }}
    >
      <div className='flex flex-col items-start justify-center w-64'>
      </div>
    </ContextMenu>
  );
};

export default Menu;
