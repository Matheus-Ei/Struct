// Library
import { EmojiClickData } from 'emoji-picker-react';
import { useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';

// Local
import EmojiSelector from './Selector';
import useToggle from 'hooks/useToggle';
import Icon from 'components/Icon';

interface EmojiProps {
  symbol?: string | null;
  className?: string;
  selectorOnClick?: boolean;
  onClick?: () => void;
  onUpdate?: (newEmoji?: string | null) => void;
}

const Emoji = ({
  symbol,
  className,
  selectorOnClick,
  onClick,
  onUpdate,
}: EmojiProps) => {
  const [newEmoji, setNewEmoji] = useState<EmojiClickData | undefined>();
  const [emoji, setEmoji] = useState<string | null | undefined>(symbol);
  const [showSelector, toggleSelector] = useToggle(false);

  // Update emoji when newEmoji is set
  useEffect(() => {
    newEmoji?.emoji && setEmoji(newEmoji.emoji);
    onUpdate && onUpdate(newEmoji?.emoji);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [newEmoji]);

  // Set emoji on first render
  useEffect(() => {
    setEmoji(symbol);
  }, [symbol]);

  const handleClick = () => {
    selectorOnClick && toggleSelector(true);
    onClick && onClick();
  };

  const css = twMerge('cursor-pointer select-none', className);

  const getEmoji = () => {
    if (!emoji)
      return <Icon value={{ name: 'IoIosDocument', library: 'io' }} />;

    return emoji;
  };

  return (
    <div className={css} onClick={handleClick}>
      {getEmoji()}

      <EmojiSelector
        setEmoji={setNewEmoji}
        show={{ value: showSelector, toggle: toggleSelector }}
      />
    </div>
  );
};

export default Emoji;
