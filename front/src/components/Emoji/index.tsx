// Library
import { EmojiClickData } from "emoji-picker-react";
import { useEffect, useState } from "react";

// Local
import EmojiSelector from "./Selector";
import useToggle from "hooks/useToggle";
import Icon from "components/Icon";

interface EmojiProps {
    symbol?: string | null;
    className?: string;
    onClick?: () => void;
    selectorOnClick?: boolean;
    onUpdate?: (newEmoji?: string | null) => void;
}

const Emoji = ({
    symbol,
    className,
    onClick,
    selectorOnClick,
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

    const css = className ? className : "cursor-pointer select-none";

    if (!emoji)
        return (
            <div className={css} onClick={handleClick}>
                <Icon name="IoIosDocument" library="io" />
                <EmojiSelector
                    setEmoji={setNewEmoji}
                    toggleShow={toggleSelector}
                    show={showSelector}
                />
            </div>
        );

    return (
        <div className={css} onClick={handleClick}>
            {emoji}

            <EmojiSelector
                setEmoji={setNewEmoji}
                toggleShow={toggleSelector}
                show={showSelector}
            />
        </div>
    );
};

export default Emoji;
