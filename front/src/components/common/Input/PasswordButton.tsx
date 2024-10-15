// Services
import Icons from "../../../services/Icons";

// Libraries
import React from "react";

interface PasswordButtonProps {
    isPassword: boolean;
    showPassword: boolean;
    toggleShowPassword: () => React.ComponentState;
}

const PasswordButton = ({
    showPassword,
    toggleShowPassword,
    isPassword,
}: PasswordButtonProps) => {
    if (!isPassword) {
        return null;
    }

    return (
        <div onClick={() => toggleShowPassword()}>
            <Icons library="fa6" name={showPassword ? "FaEye" : "FaEyeSlash"} />
        </div>
    );
};

export default PasswordButton;
