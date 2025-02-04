// Local
import Icon from 'components/Icon';

const MoveButton = () => {
  return (
    <div draggable className='cursor-move'>
      <Icon
        value={{ name: 'RiDraggable', library: 'ri' }}
        className='text-2xl'
      />
    </div>
  );
};

export default MoveButton;
