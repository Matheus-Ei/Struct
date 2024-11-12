import useToggle from "hooks/useToggle";
import { createContext, useState } from "react";
import MainStep from "./MainStep";
import PasswordStep from "./PasswordsStep";
import { SignUpContextType } from "./types";
import WrapperSignUp from "./WrapperSignUp";

export const SignUpContext = createContext<SignUpContextType | null>(null);

const SignUp = () => {
    const [step, setStep] = useState<number>(0);
    const [isError, toggleError] = useToggle(false);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const [name, setName] = useState<string | null>(null);
    const [mail, setMail] = useState<string | null>(null);
    const [nickname, setNickname] = useState<string | null>(null);

    const [password, setPassword] = useState<string | null>(null);
    const [rePassword, setRePassword] = useState<string | null>(null);

    return (
        <SignUpContext.Provider
            value={{
                step,
                setStep,
                isError,
                toggleError,
                name,
                setName,
                nickname,
                setNickname,
                mail,
                setMail,
                password,
                setPassword,
                rePassword,
                setRePassword,
                errorMessage,
                setErrorMessage,
            }}
        >
            <div className="flex justify-center items-center w-screen h-screen">
                <WrapperSignUp>
                    <>
                        {step === 0 && <MainStep />}

                        {step === 1 && <PasswordStep />}
                    </>
                </WrapperSignUp>
            </div>
        </SignUpContext.Provider>
    );
};

export default SignUp;
