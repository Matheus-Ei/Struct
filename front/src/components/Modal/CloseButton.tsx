// Local
import Icon from 'components/Icon';

interface CloseButtonProps {
  onClick: () => void;
}

const CloseButton = ({ onClick }: CloseButtonProps) => {
  return (
    <button
      onClick={onClick}
      className='absolute right-4 top-2 sm:right-0 sm:top-0'
    >
      <Icon value={{ name: 'IoMdClose', library: 'io' }} className='text-2xl' />
    </button>
  );
};

export default CloseButton;
