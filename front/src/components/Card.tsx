interface CardProps {
    children: JSX.Element;
    className?: string;
}

const Card = ({ children, className }: CardProps) => {
    const styleName = className
        ? className
        : `"w-fit h-fit flex flex-col 
            items-center justify-center 
            border rounded-box border-primary 
            bg-base-100 p-4"`;

    return <div className={styleName}>{children}</div>;
};

export default Card;
