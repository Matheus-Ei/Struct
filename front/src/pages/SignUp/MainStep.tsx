import Button from "components/Button";
import Input from "components/Input";
import Message from "components/Message";
import useToggle from "hooks/useToggle";
import { useContext, useState } from "react";
import { SignUpContext } from ".";
import { goNextStep } from "./functions";
import Validations from "./validations";

const MainStep = () => {
    const [nicknameError, toggleNicknameError] = useToggle(false);
    const [nicknameErrorType, setNicknameErrorType] = useState<string>("");

    const [mailError, toggleMailError] = useToggle(false);
    const [mailErrorType, setMailError] = useState<string>("");

    const context = useContext(SignUpContext);

    if (!context) return null;
    const {
        setNickname,
        nickname,
        setName,
        name,
        setMail,
        mail,
        setStep,
        isError,
        errorMessage,
    } = context;

    const nextStep = async () => {
        const validations = new Validations(
            context,
            toggleNicknameError,
            setNicknameErrorType,
            toggleMailError,
            setMailError
        );

        return (await validations.verify()) && goNextStep(setStep);
    };

    return (
        <div className="w-2/4 h-full flex flex-col items-center justify-center">
            <Input
                text="name..."
                setValue={setName}
                onEnter={nextStep}
                maxLength={80}
                defaultValue={name}
            />

            <div className="relative flex flex-col w-full h-fit items-center justify-center">
                {nicknameError && (
                    <p className="text-error text-sm w-full px-4">
                        {nicknameErrorType}
                    </p>
                )}
                <Input
                    text="nickname..."
                    setValue={setNickname}
                    onEnter={nextStep}
                    maxLength={35}
                    className={
                        nicknameError
                            ? "border outline-none border-error rounded-btn h-14 w-[95%] pl-4 mb-3 bg-base-100 text-base-content lowercase"
                            : "border outline-none border-neutral rounded-btn h-14 w-[95%] pl-4 mb-3 bg-base-100 text-base-content lowercase"
                    }
                    defaultValue={nickname}
                />
            </div>

            <div className="relative flex flex-col w-full h-fit items-center justify-center">
                {mailError && (
                    <p className="text-error text-sm w-full px-4">
                        {mailErrorType}
                    </p>
                )}

                <Input
                    text="mail..."
                    setValue={setMail}
                    onEnter={nextStep}
                    maxLength={120}
                    className={
                        mailError
                            ? "border outline-none border-error rounded-btn h-14 w-[95%] pl-4 mb-3 bg-base-100 text-base-content lowercase"
                            : "border outline-none border-neutral rounded-btn h-14 w-[95%] pl-4 mb-3 bg-base-100 text-base-content lowercase"
                    }
                    defaultValue={mail}
                />
            </div>

            <Message
                type="error"
                box="text"
                text={errorMessage}
                isVisible={isError}
            />

            <Button inverse={true} text="Next" onClick={nextStep} />
        </div>
    );
};

export default MainStep;
