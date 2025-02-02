// Libraries
import { useCallback, useEffect, useRef } from 'react';
import EmojiPicker, {
  EmojiClickData,
  EmojiStyle,
  Theme,
} from 'emoji-picker-react';

// Local
import { SetStateType } from 'types/global';
import Event from 'modules/Event';

interface EmojiSelectorProps {
  show: { value: boolean; toggle: (value?: boolean) => void };
  setEmoji: SetStateType<EmojiClickData | undefined>;
  position?: { x: number; y: number };
}

const EmojiSelector = ({ setEmoji, show, position }: EmojiSelectorProps) => {
  const emojiRef = useRef<HTMLDivElement>(null);

  // When an emoji is clicked
  const handleEmojiClick = (emojiObject: EmojiClickData) => {
    setEmoji(emojiObject);
    show.toggle(false);
  };

  // Close the emoji picker when clicked outside
  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (!emojiRef.current) return;

      Event.onClickCallback(
        () => show.toggle(false),
        !emojiRef.current.contains(event.target as Node),
      );
    },
    [show],
  );

  // Add event listener to close the emoji picker when clicked outside
  useEffect(() => {
    if (show.value) {
      Event.addListener('mousedown', handleClickOutside);
    }

    return () => {
      Event.removeListener('mousedown', handleClickOutside);
    };
  }, [show.value, handleClickOutside]);

  if (!show.value) return null;
  return (
    <div className='absolute z-50' ref={emojiRef}>
      <EmojiPicker
        onEmojiClick={handleEmojiClick}
        theme={Theme.AUTO}
        emojiStyle={EmojiStyle.NATIVE}
        style={{
          top: position?.y ?? 0,
          left: position?.x ?? 0,
          position: 'absolute',
          fontSize: '1rem',
        }}
      />
    </div>
  );
};

export default EmojiSelector;
