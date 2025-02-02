// Libraries
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

interface MessageProps {
  text: string | null;
  type: 'error' | 'success';
  box: 'text' | 'block';
  isVisible: boolean;
  className?: string;
}

const Message = ({ text, type, box, isVisible, className }: MessageProps) => {
  const isBlock = box === 'block';
  const isError = type === 'error';

  const defaultCss = clsx('my-2', {
    'bg-error text-error-content': isError && isBlock,
    'bg-success text-success-content': !isError && isBlock,
    'text-error': isError && !isBlock,
    'text-success': !isError && !isBlock,
    'rounded-btn text-center px-8 py-1': isBlock,
    flex: isVisible,
    invisible: !isVisible,
  });

  const css = twMerge(defaultCss, className);

  if (!isVisible) return null;
  return <p className={css}>{text}</p>;
};

export default Message;
