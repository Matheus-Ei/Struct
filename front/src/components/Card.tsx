// Libraries
import clsx from "clsx";

interface CardProps {
    children: JSX.Element;
    className?: string;
}

const Card = ({ children, className }: CardProps) => {
    const defaultCss = clsx(
        "w-fit h-fit p-4",
        "flex flex-col items-center justify-center",
        "border rounded-box border-primary bg-base-100"
    );

    const css = className ? className : defaultCss;

    return <div className={css}>{children}</div>;
};

export default Card;
