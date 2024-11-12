import { Dispatch, SetStateAction } from "react";
import Button from "components/Button";
import Input from "components/Input";

interface MainStepProps {
    setStep: Dispatch<SetStateAction<number>>;
    setName: Dispatch<SetStateAction<string | null>>;
    setNickname: Dispatch<SetStateAction<string | null>>;
    setMail: Dispatch<SetStateAction<string | null>>;
    isError: boolean;
    toggleError: (value: boolean) => void;
}

const MainStep = ({
    setStep,
    setName,
    setNickname,
    setMail,
    isError,
    toggleError,
}: MainStepProps) => {
    const nextStep = () => {
        setStep(1);
    };

    return (
        <div className="w-2/4 h-full flex flex-col items-center justify-center">
            <Input text="Name..." setValue={setName} onEnter={nextStep} />
            <Input
                text="Nickname..."
                setValue={setNickname}
                onEnter={nextStep}
            />
            <Input text="Mail..." setValue={setMail} onEnter={nextStep} />

            <Button inverse={true} text="Next" onClick={nextStep} />
        </div>
    );
};

export default MainStep;
