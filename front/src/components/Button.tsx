interface ButtonProps {
    children?: JSX.Element;
    inverse?: boolean;
    text?: string;
    onClick?: () => any;
}

const Button = ({ children, inverse, text, onClick }: ButtonProps) => {
    const size = "border w-fit h-fit px-16 py-4 rounded-xl";

    const color = inverse
        ? `bg-primary-content border-primary`
        : `bg-primary border-primary-content`;

    const buttonStyle = `${size} ${color}`;
    const textStyle = inverse ? `text-primary font-bold` : `text-primary-content font-bold`;

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
