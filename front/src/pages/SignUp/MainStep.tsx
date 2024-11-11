import Card from "components/Card";
import { Dispatch, SetStateAction } from "react";
import { ReactComponent as Logo } from "assets/logo-500x500-3.svg";
import Button from "components/Button";
import Input from "components/Input";
import WrapperSignUp from "./WrapperSignUp";

interface MainStepProps {
    setStep: Dispatch<SetStateAction<number>>;
    setName: Dispatch<SetStateAction<string | null>>;
    setNickname: Dispatch<SetStateAction<string | null>>;
    setMail: Dispatch<SetStateAction<string | null>>;
    isError: boolean;
}

const MainStep = ({
    setStep,
    setName,
    setNickname,
    setMail,
    isError,
}: MainStepProps) => {
    const nextStep = () => {
        setStep(1);
    };

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
                    <Input text="Name..." setValue={setName} />
                    <Input text="Nickname..." setValue={setNickname} />
                    <Input text="Mail..." setValue={setMail} />
                    <Button inverse={true} text="Next" onClick={nextStep} />
                </div>
            </div>
        </WrapperSignUp>
    );
};

export default MainStep;
