// Modules
import * as S from "./styles";
import * as T from "./types";

// Hooks
import { useTheme } from "../../../hooks/useTheme";

const Card = ({
    children,
    width,
    height,
    justifyContent,
    alignItems,
    flexDirection,
}: T.CardProps)=> {
    const theme = useTheme();

    const style: Object = {
        width: `${width}%`,
        height: `${height}%`,
        justifyContent,
        alignItems,
        flexDirection,
        backgroundColor: theme.primary,
        borderColor: theme.secondary,
    };

    return <S.Body style={style}>{children}</S.Body>;
};

export default Card;
