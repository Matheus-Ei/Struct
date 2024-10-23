interface ButtonProps {
    children?: JSX.Element;
    inverse?: boolean;
    text?: string;
    onClick?: () => any;
    style?: string;
}

const Button = ({ children, inverse, text, onClick, style }: ButtonProps) => {
    const size = "border w-fit h-fit px-16 py-4 rounded-btn";

    const color = inverse
        ? `bg-primary border-primary`
        : `bg-base-100 border-primary`;

    const buttonStyle = `${size} ${color}`;
    const textStyle = inverse
        ? `text-primary-content font-bold`
        : `text-primary font-bold`;

    const handdleClick = () => {
        if (onClick) {
            onClick();
        }
    };

    return (
        <button className={style ? style : buttonStyle} onClick={handdleClick}>
            {children ? children : <h1 className={textStyle}>{text}</h1>}
        </button>
    );
};

export default Button;
