// Library
import { twMerge } from 'tailwind-merge';
import { memo, useRef } from 'react';
import Icon from 'components/Icon';

interface HoverButtonProps {
  show: boolean | undefined;
  className?: string;
  onUpdate?: (imageData: File) => Promise<void>;
}

const HoverButton = ({ show, className, onUpdate }: HoverButtonProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  if (!show || !onUpdate) return null;

  const css = twMerge(
    'absolute h-full w-full bg-primary z-30 rounded-full cursor-pointer opacity-30',
    className,
  );

  const handleClick = () => {
    inputRef.current?.click();
  };

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      await onUpdate(file);
      event.target.value = '';
    }
  };

  return (
    <>
      <Icon
        value={{ name: 'MdEdit', library: 'md' }}
        className='absolute text-4xl text-primary-content'
      />

      <div className={css} onClick={handleClick} />

      <input
        type='file'
        accept='image/*'
        ref={inputRef}
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />
    </>
  );
};

export default memo(HoverButton);
