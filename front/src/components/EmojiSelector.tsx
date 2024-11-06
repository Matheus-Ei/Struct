import React, { Dispatch, SetStateAction, useState } from "react";
import EmojiPicker, { EmojiClickData } from "emoji-picker-react";

interface EmojiSelectorProps {
    emoji: EmojiClickData;
    setEmoji: Dispatch<SetStateAction<EmojiClickData>>;
}

const EmojiSelector = ({ emoji, setEmoji }: EmojiSelectorProps) => {
    const onEmojiClick = (emojiObject: EmojiClickData) => {
        setEmoji(emojiObject);
    };

    return (
        <div>
            <EmojiPicker onEmojiClick={onEmojiClick} />
            {emoji && (
                <div>
                    <p>Emoji selecionado: {emoji.emoji}</p>
                </div>
            )}
        </div>
    );
};

export default EmojiSelector;
