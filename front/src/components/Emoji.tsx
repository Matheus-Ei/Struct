interface EmojiProps {
    symbol?: string | null;
    className?: string;
    onClick?: () => void;
}

const Emoji = ({ symbol, className, onClick }: EmojiProps) => {
    const css = className ? className : "cursor-pointer select-none scale-100";

    if (!symbol)
        return (
            <div className={css} onClick={onClick}>
                &#x2753;
            </div>
        );

    return (
        <div aria-label="emoji" className={css} onClick={onClick}>
            {symbol}
        </div>
    );
};

export default Emoji;
