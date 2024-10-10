import * as S from "./styles";
import * as I from "./interface";

const SimpleButton = ({ children, style, onClick }: I.ButtonProps) => {
    return (
        <S.Body style={style} onClick={onClick}>
            {children}
        </S.Body>
    );
};

export default SimpleButton;
