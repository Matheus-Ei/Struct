// Libraries
import { createContext, useState } from "react";

// Local
import { SignUpContextType } from "./types";
import WrapperSignUp from "./WrapperSignUp";
import PasswordStep from "./PasswordsStep";
import useToggle from "hooks/useToggle";
import MainStep from "./MainStep";

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
            <div className="flex justify-center items-center w-screen h-[97vh]">
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
