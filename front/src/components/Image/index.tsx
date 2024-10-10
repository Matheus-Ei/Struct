import * as S from "./styles";
import * as I from "./interface";

const Image = ({ src, width, height }: I.ImageProps) => {
    const style = {
        width: `${width}%`,
        height: `${height}%`,
    };

    return (
        <S.Body>
            <S.Image src={src} style={style} />
        </S.Body>
    );
};

export default Image;
