import Button from "components/Button";

import { Dispatch, SetStateAction } from "react";
import Input from "components/Input";
import Message from "components/Message";

interface PasswordStepProps {
    setPassword: Dispatch<SetStateAction<string | null>>;
    makeSignUp: () => void;
    isError: boolean;
    toggleError: (value: boolean) => void;
}

const PasswordStep = ({
    setPassword,
    makeSignUp,
    isError,
    toggleError,
}: PasswordStepProps) => {
    return (
        <div className="w-2/4 h-full flex flex-col items-center justify-center">
            <Input text="Password..." setValue={setPassword} />
            <Input text="Retype password..." setValue={setPassword} />

            <Message
                text="Error making sign-up"
                box="text"
                type="error"
                isVisible={isError}
            />

            <Button inverse={true} text="Sign-up" onClick={makeSignUp} />
        </div>
    );
};

export default PasswordStep;
