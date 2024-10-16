interface CardProps {
    children: JSX.Element;
}

const Card = ({ children }: CardProps) => {
    return (
        <div className="w-fit h-fit flex flex-col items-center justify-center bg-primary border rounded-xl border-middle py-10 px-4">
            {children}
        </div>
    );
};

export default Card;
