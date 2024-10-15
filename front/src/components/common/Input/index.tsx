// Modules
import * as S from "./styles";

// Hooks
import { useTheme } from "../../../hooks/useTheme";
import useToggle from "../../../hooks/useToggle";

// Components
import PasswordButton from "./PasswordButton";

// Types
interface InputProps {
    text: string;
    setInput: (event: Event) => any;
    isPassword: boolean;

    width?: number;
    height?: number;
}

const Input = ({ text, setInput, isPassword, height, width }: InputProps) => {
    const theme = useTheme();
    const [showPassword, toggleShowPassword] = useToggle(isPassword);

    const handleInputChange = (event: any) => {
        setInput(event.target.value);
    };

    const style = S.getStyle(width, height, theme);

    return (
        <div
            style={{
                width: "95%",
                height: "5vh",
            }}
            className="flex-body"
        >
            <input
                className="set-border space-around"
                onChange={handleInputChange}
                type={!showPassword ? "text" : "password"}
                style={style}
                placeholder={text}
            ></input>

            <PasswordButton
                showPassword={showPassword}
                toggleShowPassword={toggleShowPassword}
                isPassword={isPassword}
            />
        </div>
    );
};

export default Input;
