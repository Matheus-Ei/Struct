// Library
import { twMerge } from 'tailwind-merge';

// Local
import useToggle from 'hooks/useToggle';
import HoverButton from './HoverButton';
import { useEffect, useState } from 'react';

interface ImageProps {
  src: Buffer | undefined | null;
  className?: { image?: string; container?: string };
  onUpdate?: (imageData: File) => Promise<void>;
  onClick?: () => void;
}

const Image = ({ src, className, onUpdate, onClick }: ImageProps) => {
  const [isHovering, toggleHover] = useToggle(false);
  const [source, setSource] = useState<string>('https://placehold.co/500x500');

  useEffect(() => {
    if (src && src.size !== 0) setSource(URL.createObjectURL(src as any));
  }, [src]);

  const imgCss = twMerge(
    'w-full h-full object-cover rounded-full',
    className?.image,
  );

  const divCss = twMerge(
    'h-48 w-48 relative flex items-center justify-center',
    className?.container,
  );

  return (
    <div
      className={divCss}
      onMouseEnter={() => toggleHover(true)}
      onMouseLeave={() => toggleHover(false)}
    >
      <HoverButton
        show={isHovering}
        onUpdate={onUpdate}
        className={className?.image}
      />

      <img src={source} className={imgCss} alt='profile' onClick={onClick} />
    </div>
  );
};

export default Image;
