// Hooks
import useToggle from "../../../hooks/useToggle";

// Components
import PasswordButton from "./PasswordButton";

interface InputProps {
    text: string;
    isPassword: boolean;
    setInput: (arg0: any) => any;
}

const Input = ({ text, setInput, isPassword }: InputProps) => {
    const [showPassword, toggleShowPassword] = useToggle(isPassword);

    const handleInputChange = (event: any) => {
        setInput(event.target.value);
    };

    return (
        <div className="flex items-center h-14 w-4/5">
            <input
                className="rounded-lg border border-neutral-400 dark:border-neutral-700 pl-3 h-full w-full"
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
