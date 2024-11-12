import Button from "components/Button";
import Input from "components/Input";
import Message from "components/Message";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { SignUpContext } from ".";
import { makeSignUp } from "./functions";

const PasswordStep = () => {
    const context = useContext(SignUpContext);
    const navigate = useNavigate();

    if (!context) return null;
    const { setPassword, setRePassword, isError, errorMessage } = context;

    const signUp = () => {
        makeSignUp(context, navigate);
    };

    return (
        <div className="w-2/4 h-full flex flex-col items-center justify-center">
            <Input
                text="password..."
                setValue={setPassword}
                isPassword={true}
                maxLength={80}
                onEnter={signUp}
            />
            <Input
                text="re-type password..."
                setValue={setRePassword}
                isPassword={true}
                maxLength={80}
                onEnter={signUp}
            />

            <Message
                text={errorMessage}
                box="text"
                type="error"
                isVisible={isError}
            />

            <Button inverse={true} text="Sign-up" onClick={signUp} />
        </div>
    );
};

export default PasswordStep;
