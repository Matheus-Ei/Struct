// Local
import { idType } from 'types/global';
import ActionButton from './ActionButton';
import TurnInto from './TurnInto';

interface LateralBarProps {
  isHovered: boolean;
  id: idType;
}

const LateralBar = ({ isHovered, id }: LateralBarProps) => {
  if (!isHovered) return <div className='absolute left-0 flex mr-4 gap-x-2' />;

  return (
    <div className='absolute left-0 flex mr-4 gap-x-2'>
      <ActionButton />
      <TurnInto id={id} />
    </div>
  );
};

export default LateralBar;
