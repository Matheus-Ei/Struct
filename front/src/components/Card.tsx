// Libraries
import { twMerge } from 'tailwind-merge';

interface CardProps {
  children: JSX.Element;
  className?: string;
}

const Card = ({ children, className }: CardProps) => {
  const css = twMerge(
    'w-fit h-fit p-4',
    'flex flex-col items-center justify-center',
    'border rounded-box border-neutral bg-base-100',
    className,
  );

  return <div className={css}>{children}</div>;
};

export default Card;
