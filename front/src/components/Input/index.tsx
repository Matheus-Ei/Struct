import * as S from "./styles";
import * as I from "./interface";

const Input = ({
    text,
    primaryColor,
    secondaryColor,
    middleColor,
    height,
    width,
    borderRadius,
}: I.InputProps) => {
    return (
        <S.Body>
            <S.Input
                style={{
                    width: `${width}%`,
                    height: `${height}%`,
                    borderRadius: `${borderRadius}px`,

                    color: secondaryColor,
                    backgroundColor: primaryColor,

                    borderColor: middleColor,
                }}
                placeholder={text}
            ></S.Input>
        </S.Body>
    );
};

export default Input;
