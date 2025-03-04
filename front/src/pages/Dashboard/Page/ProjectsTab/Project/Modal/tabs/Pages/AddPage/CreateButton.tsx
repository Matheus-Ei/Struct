// Local
import Point from 'components/Point';

interface CreateButtonProps {
  onClick: () => void;
}
const CreateButton = ({ onClick }: CreateButtonProps) => {
  return (
    <Point
      icon={{ name: 'FaPlus', library: 'fa6' }}
      onClick={onClick}
      className='ml-4 hover:opacity-60'
    />
  );
};

export default CreateButton;
