import * as S from "./styles";
import * as I from "./interface";

const Text = ({ text, color, size, weight }: I.TextProps) => {
    const style: Object = {
        color,
        fontSize: size,
        fontWeight: weight,
    };

    return (
        <S.Body>
            <S.Text style={style}>{text}</S.Text>
        </S.Body>
    );
};

export default Text;
