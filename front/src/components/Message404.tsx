// Library
import { memo } from 'react';
import { twMerge } from 'tailwind-merge';

// Local
import Icon from './Icon';

interface Message404Props {
  text: string;
  className?: string;
}

const Message404 = ({ text, className }: Message404Props) => {
  const css = twMerge(
    'flex items-center justify-start w-full h-fit gap-x-6',
    className,
  );

  return (
    <div className={css}>
      <Icon
        value={{ name: 'TbError404', library: 'tb' }}
        className='text-4xl w-fit'
      />

      <h1 className='text-xl w-fit cursor-default'>{text}</h1>
    </div>
  );
};

export default memo(Message404);
