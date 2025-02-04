// Local
import Icon from 'components/Icon';
import useToggle from 'hooks/useToggle';
import Menu from './Menu';

interface TurnIntoProps {
  order: number;
}

const TurnInto = ({ order }: TurnIntoProps) => {
  const [showMenu, toggleMenu] = useToggle(false);

  return (
    <div className='relative cursor-pointer'>
      <Icon
        value={{ name: 'MdOutlineTransform', library: 'md' }}
        className='text-2xl'
        onClick={() => toggleMenu(true)}
      />

      <Menu order={order} show={showMenu} onClose={() => toggleMenu(false)} />
    </div>
  );
};

export default TurnInto;
