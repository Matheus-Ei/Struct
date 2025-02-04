// Local
import ActionButton from './ActionButton';
import TurnInto from './TurnInto';

interface LateralBarProps {
  isHovered: boolean;
  order: number;
}

const LateralBar = ({ isHovered, order }: LateralBarProps) => {
  if (!isHovered) return <div className='absolute left-0 flex mr-4 gap-x-2' />;

  return (
    <div className='absolute left-0 flex mr-4 gap-x-2'>
      <ActionButton />
      <TurnInto order={order} />
    </div>
  );
};

export default LateralBar;
