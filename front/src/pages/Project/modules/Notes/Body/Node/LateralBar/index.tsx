// Local
import MoveButton from './MoveButton';

interface LateralBarProps {
  order: number;
}

const LateralBar = ({ order }: LateralBarProps) => {
  return (
    <div className='flex mr-4 gap-x-2'>
      <MoveButton />
    </div>
  );
};

export default LateralBar;
