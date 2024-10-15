interface CardProps {
    children: JSX.Element;
}

const Card = ({ children }: CardProps) => {
    return <div>{children}</div>;
};

export default Card;
