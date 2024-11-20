// Libraries
import clsx from "clsx";

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
    const buttonStyle = clsx(
        "border border-primary w-fit h-fit px-14 py-2 rounded-btn font-bold",
        {
            "bg-primary text-primary-content": inverse,
            "bg-base-100 text-primary": !inverse,
        }
    );
    const css = className ? className : buttonStyle;

    const handdleClick = () => onClick && onClick();

    return (
        <button className={css} onClick={handdleClick}>
            {children ? children : <h1>{text}</h1>}
        </button>
    );
};

export default Button;
