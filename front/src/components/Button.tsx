interface ButtonProps {
    children?: JSX.Element;
    inverse?: boolean;
    text?: string;
    onClick?: () => any;
}

const Button = ({ children, inverse, text, onClick }: ButtonProps) => {
    const size = "border w-fit h-fit px-10 py-2 rounded-lg";

    const color = inverse
        ? `bg-secondary border-primary`
        : `bg-primary border-secondary`;

    const buttonStyle = `${size} ${color}`;
    const textStyle = inverse ? `text-primary font-bold` : `text-secondary`;

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
