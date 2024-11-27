// Libraries
import { useCallback, useEffect, useRef } from "react";
import EmojiPicker, {
    EmojiClickData,
    EmojiStyle,
    Theme,
} from "emoji-picker-react";

// Local
import { SetStateType } from "types/global";
import Event from "modules/Event";

interface EmojiSelectorProps {
    setEmoji: SetStateType<EmojiClickData | undefined>;
    toggleShow: (value: boolean | undefined) => void;
    show: boolean;
    position?: { x: number; y: number };
}

const EmojiSelector = ({
    setEmoji,
    show,
    toggleShow,
    position,
}: EmojiSelectorProps) => {
    const emojiRef = useRef<HTMLDivElement>(null);

    const handleEmojiClick = (emojiObject: EmojiClickData) => {
        setEmoji(emojiObject);
        toggleShow(false);
    };

    const handleClickOutside = useCallback(
        (event: MouseEvent) => {
            if (!emojiRef.current) return;

            Event.onClickCallback(
                () => toggleShow(false),
                !emojiRef.current.contains(event.target as Node)
            );
        },
        [toggleShow]
    );

    useEffect(() => {
        if (show) {
            Event.addListener("contextmenu", handleClickOutside);
        }

        return () => {
            Event.removeListener("contextmenu", handleClickOutside);
        };
    }, [show, handleClickOutside]);

    if (!show) return null;
    return (
        <div className="absolute z-50" ref={emojiRef}>
            <EmojiPicker
                onEmojiClick={handleEmojiClick}
                theme={Theme.AUTO}
                emojiStyle={EmojiStyle.NATIVE}
                style={{
                    top: position?.y ?? 0,
                    left: position?.x ?? 0,
                    position: "absolute",
                }}
            />
        </div>
    );
};

export default EmojiSelector;
