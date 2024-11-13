// Libraries
import React from "react";

interface EmojiProps {
    symbol?: string | null;
    style?: React.CSSProperties;
}

const Emoji = ({ symbol, style }: EmojiProps) => {
    if (!symbol) {
        return <p style={style}>&#x2753;</p>;
    }

    return (
        <span style={style} role="img" aria-label="emoji">
            {symbol}
        </span>
    );
};

export default Emoji;
