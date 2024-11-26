// Libraries
import { createContext, useState } from "react";

// Local
import { SignUpContextType } from "./utils/types";
import { ErrorType } from "types/global";
import Wrapper from "./Wrapper";
import Password from "./steps/Password";
import Start from "./steps/Start";

export const SignUpContext = createContext<SignUpContextType | null>(null);

const SignUp = () => {
    const [step, setStep] = useState<number>(0);

    const [name, setName] = useState<string | undefined>();
    const [mail, setMail] = useState<string | undefined>();
    const [nickname, setNickname] = useState<string | undefined>();

    const [password, setPassword] = useState<string | undefined>();
    const [rePassword, setRePassword] = useState<string | undefined>();

    const [error, setError] = useState<ErrorType>({
        message: "",
        isError: false,
    });

    return (
        <SignUpContext.Provider
            value={{
                step,
                setStep,
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
                error,
                setError,
            }}
        >
            <div className="flex justify-center items-center w-screen h-[97vh]">
                <Wrapper>
                    <>
                        {step === 0 && <Start />}

                        {step === 1 && <Password />}
                    </>
                </Wrapper>
            </div>
        </SignUpContext.Provider>
    );
};

export default SignUp;
