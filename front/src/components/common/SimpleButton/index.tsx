import * as S from "./styles";
import * as T from "./types";

const SimpleButton = ({
    children,
    backgroundColor,
    borderColor,
    onClick,
}: T.ButtonProps) => {
    const style = { borderColor, backgroundColor };

    return (
        <S.Body
            style={style}
            onClick={() => {
                if (onClick) {
                    onClick();
                }
            }}
        >
            {children}
        </S.Body>
    );
};

export default SimpleButton;
