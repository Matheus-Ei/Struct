import React from "react";

interface EmojiProps {
    symbol: number;
    style?: React.CSSProperties;
}

const Emoji = React.memo(({ symbol, style }: EmojiProps) => (
    <span style={style} role="img">
        {String.fromCodePoint(symbol)}
    </span>
));

export default Emoji;
