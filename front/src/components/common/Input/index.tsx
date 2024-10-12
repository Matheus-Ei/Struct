// Modules
import * as S from "./styles";
import * as T from "./types";

// Hooks
import { useTheme } from "../../../hooks/useTheme";
import useToggle from "../../../hooks/useToggle";

// Libraries
import React from "react";
import Icons from "../../../services/Icons";

const Input = ({
    text,
    setInput,
    height,
    width,
    isPassword,
}: T.InputProps): JSX.Element => {
    const theme = useTheme();
    const [showPassword, toggleShowPassword] = useToggle(isPassword || false);

    // Function to get the input from the form
    const handleInputChange = (event: any) => {
        setInput(event.target.value);
    };

    // Function to change the eye icon
    const changeEyeIcon = () => {
        const ico = showPassword ? "FaEye" : "FaEyeSlash";

        return (
            <Icons library="fa6" name={ico} color={theme.middle} size={30} />
        );
    };

    // Function to show the password button
    const passwordShowButton = () => {
        return (
            <S.PasswordButton
                style={{ backgroundColor: theme.primary }}
                onClick={() => toggleShowPassword()}
            >
                {changeEyeIcon()}
            </S.PasswordButton>
        );
    };

    // Function to check if the form is the type password
    const checkIfIsPassword = () => {
        if (isPassword) {
            return passwordShowButton();
        }
    };

    const style = {
        width: `${width}%`,
        height: `${height}%`,
        color: theme.secondary,
        backgroundColor: theme.primary,
        borderColor: theme.middle,
    };

    return (
        <S.Body>
            <S.Input
                onChange={handleInputChange}
                type={!showPassword ? "text" : "password"}
                style={style}
                placeholder={text}
            ></S.Input>

            {checkIfIsPassword()}
        </S.Body>
    );
};

export default React.memo(Input);
