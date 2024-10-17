interface ButtonProps {
    children?: JSX.Element;
    inverse?: boolean;
    text?: string;
    onClick?: () => any;
}

const Button = ({ children, inverse, text, onClick }: ButtonProps) => {
    const size = "border w-fit h-fit px-16 py-4 rounded-xl";

    const color = inverse
        ? `bg-base-100 border-primary`
        : `bg-primary border-base-200`;

    const buttonStyle = `${size} ${color}`;
    const textStyle = inverse ? `text-primary font-bold` : `text-base-200 font-bold`;

    const handdleClick = () => {
        if (onClick) {
            onClick();
        }
    };

    return (
        <button className={buttonStyle} onClick={handdleClick}>
            {children ? children : <h1 className={textStyle}>{text}</h1>}
        </button>
    );
};

export default Button;
