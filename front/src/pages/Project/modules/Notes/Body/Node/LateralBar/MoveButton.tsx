// Local
import Icon from 'components/Icon';

const MoveButton = () => {
  return (
    <div draggable className='cursor-move'>
      <Icon value={{ name: 'IoMove', library: 'io5' }} className='text-2xl' />
    </div>
  );
};

export default MoveButton;
