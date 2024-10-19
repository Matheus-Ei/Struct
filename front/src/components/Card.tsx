interface CardProps {
    children: JSX.Element;
}

const Card = ({ children }: CardProps) => {
    return (
        <div className="w-fit h-fit flex flex-col items-center justify-center border rounded-box border-primary bg-base-100 p-4">
            {children}
        </div>
    );
};

export default Card;
