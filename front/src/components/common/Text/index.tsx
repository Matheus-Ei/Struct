// Modules
import * as S from "./styles";
import * as T from "./types";

const Text = ({ text, color, size, weight, containerWidth }: T.TextProps) => {
    const style: Object = {
        color,
        fontWeight: weight,
        fontSize: size ? `${size}em` : "",
    };

    const containerStyle = { width: `${containerWidth}%` };

    return (
        <S.Body style={containerStyle}>
            <S.Text style={style}>{text}</S.Text>
        </S.Body>
    );
};

export default Text;
