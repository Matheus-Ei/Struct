import useToggle from "hooks/useToggle";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Request from "services/Request";
import MainStep from "./MainStep";
import PasswordStep from "./PasswordsStep";
import WrapperSignUp from "./WrapperSignUp";

const SignUp = () => {
    const [step, setStep] = useState<number>(0);
    const [isError, toggleError] = useToggle(false);

    const [name, setName] = useState<string | null>(null);
    const [mail, setMail] = useState<string | null>(null);
    const [nickname, setNickname] = useState<string | null>(null);
    const [password, setPassword] = useState<string | null>(null);

    const navigate = useNavigate();

    const makeSignUp = async () => {
        try {
            if (
                password === null ||
                nickname === null ||
                mail === null ||
                name === null
            ) {
                toggleError(true);
                return;
            }

            await Request.post("user/register", {
                name,
                nickname,
                mail,
                password,
            });

            navigate("/dashboard");
        } catch {
            toggleError(true);
        }
    };

    return (
        <div className="flex justify-center items-center w-screen h-screen">
            <WrapperSignUp setStep={setStep} step={step}>
                <>
                    {step === 0 && (
                        <MainStep
                            setName={setName}
                            setNickname={setNickname}
                            setMail={setMail}
                            setStep={setStep}
                            isError={isError}
                            toggleError={toggleError}
                        />
                    )}

                    {step === 1 && (
                        <PasswordStep
                            setPassword={setPassword}
                            makeSignUp={makeSignUp}
                            isError={isError}
                            toggleError={toggleError}
                        />
                    )}
                </>
            </WrapperSignUp>
        </div>
    );
};

export default SignUp;
