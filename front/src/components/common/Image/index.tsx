// Modules
import * as S from "./styles";
import * as T from "./types";

// Hooks
import { useTheme } from "../../../hooks/useTheme";

// Libraries
import React from "react";

const Image = ({
    src,
    width,
    bodyHeight,
    borderRadius,
}: T.ImageProps): JSX.Element => {
    const theme = useTheme();

    const bodyStyle = { height: `${bodyHeight}%` };
    const borderColor = theme.middle;

    const imageStyle = { borderRadius, borderColor, width: `${width}%` };

    return (
        <S.Body style={bodyStyle}>
            <S.Image src={src} style={imageStyle} />
        </S.Body>
    );
};

export default React.memo(Image);
