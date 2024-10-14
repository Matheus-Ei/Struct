// Modules
import * as S from "./styles";
import * as T from "./types";

// Hooks
import { useTheme } from "../../../hooks/useTheme";

const Image = ({ src, width, height, borderRadius }: T.ImageProps) => {
    const theme = useTheme();

    const bodyStyle = {
        height: `${height}%`,
        width: `${width}%`,
        borderRadius,
        borderColor: theme.middle,
    };

    return (
        <S.Body style={bodyStyle}>
            <S.Image src={src} />
        </S.Body>
    );
};

export default Image;
