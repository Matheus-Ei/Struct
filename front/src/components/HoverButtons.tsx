// Library
import { twMerge } from 'tailwind-merge';
import { memo } from 'react';

// Local
import Icon from 'components/Icon';
import { IconType } from 'types/global';

interface HoverFunction {
  icon: IconType;
  onClick: () => void;
}

interface HoverButtonsProps {
  isHover: boolean;
  functions: HoverFunction[];
  className?: string;
}

const HoverButtons = ({ isHover, functions, className }: HoverButtonsProps) => {
  if (!isHover) return null;

  const addFunction = (item: HoverFunction, index: number) => {
    return (
      <Icon
        value={item.icon}
        onClick={item.onClick}
        key={index}
        className='hover:opacity-60'
      />
    );
  };

  const css = twMerge(
    'flex items-center justify-center select-none cursor-pointer',
    className,
  );

  return <div className={css}>{functions.map(addFunction)}</div>;
};

export default memo(HoverButtons);
