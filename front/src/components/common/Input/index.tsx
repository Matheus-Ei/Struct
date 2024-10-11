import { useTheme } from "../../../hooks/useTheme";
import * as S from "./styles";
import * as T from "./types";

const Input = ({
    text,
    setInput,
    height,
    width,
    borderRadius,
}: T.InputProps) => {
    const theme = useTheme();

    const handleInputChange = (event: any) => {
        setInput(event.target.value);
    };

    const fontColor = theme.secondary;
    const backgroundColor = theme.primary;
    const borderColor = theme.middle;

    const style = {
        width: `${width}%`,
        height: `${height}%`,
        borderRadius: `${borderRadius}px`,
        color: fontColor,
        backgroundColor: backgroundColor,
        borderColor: borderColor,
    };

    return (
        <S.Body>
            <S.Input
                onChange={handleInputChange}
                style={style}
                placeholder={text}
            ></S.Input>
        </S.Body>
    );
};

export default Input;
