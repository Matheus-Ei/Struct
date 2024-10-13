// Modules
import * as S from "./styles";
import * as T from "./types";

// Hooks
import { useTheme } from "../../../hooks/useTheme";

const Image = ({ src, width, bodyHeight, borderRadius }: T.ImageProps) => {
    const theme = useTheme();

    const bodyStyle = { height: `${bodyHeight}%` };

    const imageStyle = {
        borderRadius,
        borderColor: theme.middle,
        width: `${width}%`,
    };

    return (
        <S.Body style={bodyStyle}>
            <S.Image src={src} style={imageStyle} />
        </S.Body>
    );
};

export default Image;
