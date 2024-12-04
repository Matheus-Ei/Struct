// Libraries
import { useNavigate } from "react-router-dom";
import { useContext } from "react";

// Local
import { makeSignUp } from "../utils/functions";
import Message from "components/Message";
import Button from "components/Button";
import Input from "components/Input";
import { SignUpContext } from "..";

const Password = () => {
    const useSignUpContext = useContext(SignUpContext);
    const navigate = useNavigate();

    if (!useSignUpContext) return null;
    const { setPassword, setRePassword, error } = useSignUpContext;

    const signUp = () => {
        makeSignUp(useSignUpContext, navigate);
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
                text={error.message}
                box="text"
                type="error"
                isVisible={error.isError}
            />

            <Button inverse={true} text="Sign-up" onClick={signUp} />
        </div>
    );
};

export default Password;
