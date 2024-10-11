// Modules
import * as S from "./styles";
import * as T from "./types";

// Hooks
import { useTheme } from "../../../hooks/useTheme";

// Libraries
import React from "react";

const Image = ({
    src,
    borderRadius,
    containerHeight,
    width,
}: T.ImageProps): JSX.Element => {
    const theme = useTheme();

    const containerStyle = { height: `${containerHeight}%` };

    const borderColor = theme.middle;
    const imageStyle = { borderRadius, borderColor, width: `${width}%` };

    return (
        <S.Body style={containerStyle}>
            <S.Image src={src} style={imageStyle} />
        </S.Body>
    );
};

export default React.memo(Image);
