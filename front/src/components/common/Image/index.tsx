import * as S from "./styles";
import * as T from "./types";

const Image = ({
    src,
    borderColor,
    borderRadius,
    containerHeight,
    width,
}: T.ImageProps) => {
    const containerStyle = { maxHeight: `${containerHeight}%` };
    const imageStyle = { borderRadius, borderColor, width: `${width}%` };

    return (
        <S.Body style={containerStyle}>
            <S.Image src={src} style={imageStyle} />
        </S.Body>
    );
};

export default Image;
