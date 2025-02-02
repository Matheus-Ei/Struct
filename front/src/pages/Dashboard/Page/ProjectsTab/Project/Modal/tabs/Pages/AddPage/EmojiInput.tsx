// Library
import { EmojiClickData } from 'emoji-picker-react';

// Local
import EmojiSelector from 'components/Emoji/Selector';
import { SetStateType } from 'types/global';
import useToggle from 'hooks/useToggle';
import Emoji from 'components/Emoji';

interface EmojiInputProps {
  emoji: EmojiClickData | undefined;
  setEmoji: SetStateType<EmojiClickData | undefined>;
}

const EmojiInput = ({ emoji, setEmoji }: EmojiInputProps) => {
  const [showEmoji, toggleShowEmoji] = useToggle(false);

  return (
    <>
      <Emoji
        symbol={emoji?.emoji}
        onClick={() => toggleShowEmoji()}
        className='scale-125 py-1 px-2'
      />

      <EmojiSelector
        show={{ value: showEmoji, toggle: toggleShowEmoji }}
        setEmoji={setEmoji}
        position={{ x: -270, y: -470 }}
      />
    </>
  );
};

export default EmojiInput;
