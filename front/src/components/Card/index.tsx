import * as S from "./styles";
import * as I from "./interface";

const Card = ({
    children,
    style,
    width,
    height,
    radius,
    justifyContent,
    alignItems,
    flexDirection,
}: I.CardProps) => {
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
