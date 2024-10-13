// Modules
import * as S from "./styles";
import * as T from "./types";

// Hooks
import { useTheme } from "../../../hooks/useTheme";
import useToggle from "../../../hooks/useToggle";

// Components
import PasswordButton from "./components/PasswordButton";

const Input = ({
    text,
    setInput,
    isPassword,
    height,
    width,
}: T.InputProps)=> {
    const theme = useTheme();
    const [showPassword, toggleShowPassword] = useToggle(isPassword);

    const handleInputChange = (event: any) => {
        setInput(event.target.value);
    };

    const style = S.getStyle(width, height, theme);

    return (
        <S.Body>
            <S.Input
                onChange={handleInputChange}
                type={!showPassword ? "text" : "password"}
                style={style}
                placeholder={text}
            ></S.Input>

            <PasswordButton
                showPassword={showPassword}
                toggleShowPassword={toggleShowPassword}
                isPassword={isPassword}
            />
        </S.Body>
    );
};

export default Input;
