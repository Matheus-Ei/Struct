interface CardProps {
    children: JSX.Element;
}

const Card = ({ children }: CardProps) => {
    return (
        <div className="p-2 border-solid bg-neutral-0 dark:bg-neutral-900 border-neutral-900 dark:border-neutral-0 border rounded-xl w-fit h-fit">
            {children}
        </div>
    );
};

export default Card;
