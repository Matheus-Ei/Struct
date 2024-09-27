import * as S from "./styles";

interface CardProps {
    children: JSX.Element;
    style?: Object;

    width?: number;
    height?: number;
    radius?: number;
    justifyContent?: string;
    alignItems?: string;
    flexDirection?: string;
}

const Card = ({
    children,
    style,
    width,
    height,
    radius,
    justifyContent,
    alignItems,
    flexDirection,
}: CardProps) => {
    if (style) {
        return <S.Body style={style}>{children}</S.Body>;
    }

    const definedStyle: Object = {
        width: `${width}%`,
        height: `${height}%`,
        borderRadius: radius,
        justifyContent,
        alignItems,
        flexDirection,
    };

    return <S.Body style={definedStyle}>{children}</S.Body>;
};

export default Card;
