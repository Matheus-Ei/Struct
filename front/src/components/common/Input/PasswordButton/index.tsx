// Modules
import * as T from "./types";
import "./styles.css";

// Services
import Icons from "../../../../services/Icons";
import { useTheme } from "../../../../hooks/useTheme";

const PasswordButton = ({
    showPassword,
    toggleShowPassword,
    isPassword,
}: T.PasswordButtonProps) => {
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
