import Button from "components/Button";
import { ReactComponent as Logo } from "assets/logo-500x500-3.svg";
import { Dispatch, SetStateAction } from "react";
import Input from "components/Input";
import WrapperSignUp from "./WrapperSignUp";
import Message from "components/Message";

interface PasswordStepProps {
    setPassword: Dispatch<SetStateAction<string | null>>;
    makeSignUp: () => void;
    isError: boolean;
}

const PasswordStep = ({
    setPassword,
    makeSignUp,
    isError,
}: PasswordStepProps) => {
    return (
        <WrapperSignUp>
            <div className="w-full h-full flex items-center justify-center gap-[10%]">
                <div className="w-fit h-fit flex flex-col items-center">
                    <Logo className="text-primary w-64 h-fit mb-4" />

                    <p className="text-primary text-center text-lg w-72">
                        Venha fazer parte de um mundo mais organizado.
                    </p>
                </div>

                <div className="w-2/4 h-full flex flex-col items-center justify-center">
                    <Input text="Password..." setValue={setPassword} />
                    <Input text="Retype password..." setValue={setPassword} />

                    <Message
                        text="Error making sign-up"
                        box="text"
                        type="error"
                        isVisible={isError}
                    />

                    <Button
                        inverse={true}
                        text="Sign-up"
                        onClick={makeSignUp}
                    />
                </div>
            </div>
        </WrapperSignUp>
    );
};

export default PasswordStep;
