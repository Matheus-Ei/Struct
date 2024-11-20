// Libraries
import clsx from "clsx";
import React from "react";

interface EmojiProps {
    symbol?: string | null;
    className?: string;
    onClick?: () => void;
}

const Emoji = ({ symbol, className, onClick }: EmojiProps) => {
    const css = className ? className : "cursor-pointer select-none scale-100";

    if (!symbol)
        return (
            <button className={css} onClick={onClick}>
                &#x2753;
            </button>
        );

    return (
        <button role="img" aria-label="emoji" className={css} onClick={onClick}>
            {symbol}
        </button>
    );
};

export default Emoji;
