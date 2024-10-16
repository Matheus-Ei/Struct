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
        <div
            className="relative right-14 h-fit w-0"
            onClick={() => toggleShowPassword()}
        >
            <Icons
                library="fa6"
                name={showPassword ? "FaEye" : "FaEyeSlash"}
                size={30}
                color="neutral-300"
            />
        </div>
    );
};

export default PasswordButton;
