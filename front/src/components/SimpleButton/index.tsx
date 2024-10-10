import * as S from "./styles";
import * as I from "./interface"

const SimpleButton = ({ children, style, black, onClick }: I.ButtonProps) => {
    if (black) {
        return (
            <S.BodyBlack style={style} onClick={onClick}>
                {children}
            </S.BodyBlack>
        );
    }

    return (
        <S.BodyWhite style={style} onClick={onClick}>
            {children}
        </S.BodyWhite>
    );
};

export default SimpleButton;
