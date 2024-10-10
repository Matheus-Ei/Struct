import * as S from "./styles";
import * as T from "./types";

const Text = ({ text, color, size, weight, containerWidth }: T.TextProps) => {
    const style: Object = {
        color,
        fontSize: `${size}em`,
        fontWeight: weight,
    };

    const containerStyle = { width: `${containerWidth}%` };

    return (
        <S.Body style={containerStyle}>
            <S.Text style={style}>{text}</S.Text>
        </S.Body>
    );
};

export default Text;
