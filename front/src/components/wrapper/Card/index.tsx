import * as S from "./styles";

interface CardProps {
    children: JSX.Element;
    style?: Object;
}

const Card = ({ children, style }: CardProps) => {
    return <S.Body style={style}>{children}</S.Body>;
};

export default Card;
