interface ButtonProps {
    children?: JSX.Element;
    inverse?: boolean;
    text?: string;
    onClick?: () => any;
    className?: string;
}

const Button = ({
    children,
    inverse,
    text,
    onClick,
    className,
}: ButtonProps) => {
    const size = "border w-fit h-fit px-14 py-2 rounded-btn";

    const color = inverse
        ? `bg-primary border-primary`
        : `bg-base-100 border-primary`;

    const textStyle = inverse
        ? `text-primary-content font-bold`
        : `text-primary font-bold`;
    const buttonStyle = `${size} ${color} ${textStyle}`;

    const handdleClick = () => {
        if (onClick) {
            onClick();
        }
    };

    return (
        <button
            className={className ? className : buttonStyle}
            onClick={handdleClick}
        >
            {children ? children : <h1>{text}</h1>}
        </button>
    );
};

export default Button;
