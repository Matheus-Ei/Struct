// Hooks
import useToggle from "../../../hooks/useToggle";

// Components
import PasswordButton from "./PasswordButton";

interface InputProps {
    text: string;
    isPassword: boolean;
    setInput: (event: Event) => any;
}

const Input = ({ text, setInput, isPassword }: InputProps) => {
    const [showPassword, toggleShowPassword] = useToggle(isPassword);

    const handleInputChange = (event: any) => {
        setInput(event.target.value);
    };

    return (
        <div>
            <input
                onChange={handleInputChange}
                type={!showPassword ? "text" : "password"}
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
