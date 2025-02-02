// Local
import AddButton from './AddButton';
import RemoveButton from './RemoveButton';

interface LateralBarProps {
  order: number;
}

const LateralBar = ({ order }: LateralBarProps) => {
  return (
    <div className='flex mr-4'>
      <AddButton order={order} />
      <RemoveButton order={order} />
    </div>
  );
};

export default LateralBar;
