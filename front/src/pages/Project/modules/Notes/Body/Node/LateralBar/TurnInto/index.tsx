// Local
import Icon from 'components/Icon';
import useToggle from 'hooks/useToggle';
import { idType } from 'types/global';
import Menu from './Menu';

interface TurnIntoProps {
  id: idType;
}

const TurnInto = ({ id }: TurnIntoProps) => {
  const [showMenu, toggleMenu] = useToggle(false);

  return (
    <div className='relative cursor-pointer'>
      <Icon
        value={{ name: 'MdOutlineTransform', library: 'md' }}
        className='text-2xl'
        onClick={() => toggleMenu(true)}
      />

      <Menu id={id} show={showMenu} onClose={() => toggleMenu(false)} />
    </div>
  );
};

export default TurnInto;
