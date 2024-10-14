// Modules
import * as S from "./styles";
import * as T from "./types";

// Hooks
import { useTheme } from "../../../hooks/useTheme";

const Card = ({
    children,
    width,
    height,
}: T.CardProps)=> {
    const theme = useTheme();

    const style: Object = {
        width: `${width}%`,
        height: `${height}%`,
        backgroundColor: theme.primary,
        borderColor: theme.secondary,
    };

    return <S.Body style={style}>{children}</S.Body>;
};

export default Card;
