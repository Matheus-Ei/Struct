// Modules
import * as S from "./styles";
import * as T from "./types";

// Hooks
import { useTheme } from "../../../hooks/useTheme";

const Image = ({
    src,
    borderRadius,
    containerHeight,
    width,
}: T.ImageProps) => {
    const theme = useTheme();

    const containerStyle = { maxHeight: `${containerHeight}%` };

    const borderColor = theme.middle;
    const imageStyle = { borderRadius, borderColor, width: `${width}%` };

    return (
        <S.Body style={containerStyle}>
            <S.Image src={src} style={imageStyle} />
        </S.Body>
    );
};

export default Image;
