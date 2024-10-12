// Modules
import * as S from "./styles";
import * as T from "./types";

// Services
import Icons from "../../../../../services/Icons";
import { useTheme } from "../../../../../hooks/useTheme";

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

export default PasswordButton;
