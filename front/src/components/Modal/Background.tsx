// Library
import clsx from 'clsx';
import { MouseEvent } from 'react';

interface BackgroundProps {
  children: JSX.Element;
  onClick: () => void;
}

const css = clsx(
  'fixed top-0 left-0',
  'w-screen h-screen',
  'flex items-center justify-center z-20',
  'bg-[rgba(0,0,0,0.3)]',
);

const Background = ({ children, onClick }: BackgroundProps) => {
  const handleClose = (event: MouseEvent<HTMLElement>) => {
    if (event.target !== event.currentTarget) return;
    onClick();
  };

  return (
    <div className={css} onClick={handleClose}>
      {children}
    </div>
  );
};

export default Background;
