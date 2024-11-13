// Libraries
import { Dispatch, SetStateAction } from "react";
import EmojiPicker, {
    EmojiClickData,
    EmojiStyle,
    Theme,
} from "emoji-picker-react";

interface EmojiSelectorProps {
    setEmoji: Dispatch<SetStateAction<EmojiClickData | undefined>>;
    toggleShow: (value: boolean | undefined) => void;
    show: boolean;
}

const EmojiSelector = ({ setEmoji, show, toggleShow }: EmojiSelectorProps) => {
    const onEmojiClick = (emojiObject: EmojiClickData) => {
        setEmoji(emojiObject);
        toggleShow(false);
    };

    if (!show) {
        return null;
    }

    return (
        <div className="absolute z-50">
            <EmojiPicker
                onEmojiClick={onEmojiClick}
                theme={Theme.AUTO}
                emojiStyle={EmojiStyle.NATIVE}
            />
        </div>
    );
};

export default EmojiSelector;
