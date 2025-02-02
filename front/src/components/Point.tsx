// Libraries
import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';

// Local
import Icon from 'components/Icon';
import { IconType } from 'types/global';

interface PointProps {
  text?: string;
  icon?: IconType;
  isSelected?: boolean;
  className?: string;
  onClick?: () => void;
}

const Point = ({ text, icon, isSelected, onClick, className }: PointProps) => {
  const handleClick = () => onClick && onClick();

  const defaultCss = clsx(
    'flex justify-center items-center',
    'rounded-btn cursor-pointer select-none',
    {
      'gap-4 py-2 px-4': text,
      'p-1': !text,
      'bg-primary text-primary-content': isSelected,
    },
  );
  const css = twMerge(defaultCss, className);

  return (
    <div onClick={handleClick} className={css}>
      <Icon value={icon} className='text-xl' />

      {text && <p>{text}</p>}
    </div>
  );
};

export default Point;
