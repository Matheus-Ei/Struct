// Modules
import "./styles.css";

// Services
import Icons from "../../../../services/Icons";
import { useTheme } from "../../../../hooks/useTheme";

// Libraries
import React from "react";

interface PasswordButtonProps {
    showPassword: boolean;
    toggleShowPassword: () => React.ComponentState;
    isPassword: boolean;
}

const PasswordButton = ({
    showPassword,
    toggleShowPassword,
    isPassword,
}: PasswordButtonProps) => {
    const theme = useTheme();

    if (!isPassword) {
        return null;
    }

    return (
        <div
            className="password-button-icon"
            style={{ backgroundColor: theme.primary }}
            onClick={() => toggleShowPassword()}
        >
            <Icons
                library="fa6"
                name={showPassword ? "FaEye" : "FaEyeSlash"}
                color={theme.middle}
                size={30}
            />
        </div>
    );
};

export default PasswordButton;
