// Modules
import * as S from "./styles";
import * as T from "./types";

// Hooks
import { useTheme } from "../../../hooks/useTheme";
import useToggle from "../../../hooks/useToggle";

// Libraries
import React from "react";
import Icons from "../../../services/Icons";

const passwordButton = (
    showPassword: boolean,
    toggleShowPassword: () => React.ComponentState,
    isPassword: boolean,
    theme: any
) => {
    if (!isPassword) {
        return null;
    }

    return (
        <S.PasswordButton
            style={{ backgroundColor: theme.primary }}
            onClick={() => toggleShowPassword()}
        >
            <Icons
                library="fa6"
                name={showPassword ? "FaEye" : "FaEyeSlash"}
                color={theme.middle}
                size={30}
            />
        </S.PasswordButton>
    );
};

const Input = ({
    text,
    setInput,
    isPassword,
    height,
    width,
}: T.InputProps): JSX.Element => {
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

            {passwordButton(
                showPassword,
                toggleShowPassword,
                isPassword,
                theme
            )}
        </S.Body>
    );
};

export default React.memo(Input);
