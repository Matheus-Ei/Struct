// Local
import MoveButton from './MoveButton';

interface LateralBarProps {
  isHovered: boolean;
}

const LateralBar = ({ isHovered }: LateralBarProps) => {
  if (!isHovered) return <div className='absolute left-0 flex mr-4 gap-x-2' />;

  return (
    <div className='absolute left-0 flex mr-4 gap-x-2'>
      <MoveButton />
    </div>
  );
};

export default LateralBar;
