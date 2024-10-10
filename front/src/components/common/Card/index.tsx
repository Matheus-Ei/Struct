import * as S from "./styles";
import * as T from "./types";

const Card = ({
    children,
    width,
    height,
    radius,
    justifyContent,
    alignItems,
    flexDirection,
    gap,
    backgroundColor,
    borderColor,
}: T.CardProps) => {
    const style: Object = {
        width: `${width}%`,
        height: `${height}%`,
        borderRadius: radius,
        justifyContent,
        alignItems,
        flexDirection,
        gap: `${gap}%`,
        backgroundColor,
        borderColor,
    };

    return <S.Body style={style}>{children}</S.Body>;
};

export default Card;
