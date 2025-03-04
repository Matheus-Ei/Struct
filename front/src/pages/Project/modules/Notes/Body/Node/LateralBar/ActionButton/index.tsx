// Local
import Icon from 'components/Icon';
// import useToggle from 'hooks/useToggle';
// import Menu from './Menu';

const ActionButton = () => {
  // const [showMenu, toggleMenu] = useToggle(false);

  return (
    <div className='cursor-move'>
      <div draggable>
        <Icon
          value={{ name: 'RiDraggable', library: 'ri' }}
          className='text-2xl'
          // onClick={() => toggleMenu(true)}
        />
      </div>

    </div>
  );
      // <Menu show={showMenu} onClose={() => toggleMenu(false)} />
};

export default ActionButton;
