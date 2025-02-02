// Libraries
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

interface ButtonProps {
  children?: JSX.Element;
  inverse?: boolean;
  text?: string;
  onClick?: () => void;
  className?: string;
}

const Button = ({
  children,
  inverse,
  text,
  onClick,
  className,
}: ButtonProps) => {
  const rawCss = clsx(
    'border border-primary w-fit h-fit px-14 py-2 rounded-btn font-bold',
    {
      'bg-primary text-primary-content hover:bg-secondary hover:text-secondary-content hover:border-secondary':
        inverse,
      'bg-base-100 text-primary hover:bg-primary hover:text-primary-content hover:border-primary':
        !inverse,
    },
  );
  const css = twMerge(rawCss, className);

  return (
    <button className={css} onClick={() => onClick && onClick()}>
      {children ? children : <h1>{text}</h1>}
    </button>
  );
};

export default Button;
