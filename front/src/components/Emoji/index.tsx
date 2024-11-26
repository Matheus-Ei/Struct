interface EmojiProps {
    symbol?: string | null;
    className?: string;
    onClick?: () => void;
}

const Emoji = ({ symbol, className, onClick }: EmojiProps) => {
    const css = className ? className : "cursor-pointer select-none text-lg";

    if (!symbol)
        return (
            <div className={css} onClick={onClick}>
                &#x2753;
            </div>
        );

    return (
        <div className={css} onClick={onClick}>
            {symbol}
        </div>
    );
};

export default Emoji;
