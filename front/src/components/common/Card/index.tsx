// Modules
import * as S from "./styles";
import * as T from "./types";

// Hooks
import { useTheme } from "../../../hooks/useTheme";

// Libraries
import React from "react";

const Card = ({
    children,
    width,
    height,
    radius,
    justifyContent,
    alignItems,
    flexDirection,
    gap,
}: T.CardProps): JSX.Element => {
    const theme = useTheme();

    const backgroundColor = theme.primary;
    const borderColor = theme.secondary;

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

export default React.memo(Card);
