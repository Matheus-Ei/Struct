// Libraries
import { useContext, useState } from "react";

// Local
import Message from "components/Message";
import { goNextStep } from "./utils/functions";
import Validations from "./utils/validations";
import Button from "components/Button";
import Input from "components/Input";
import { SignUpContext } from ".";
import User from "services/user";

interface ErrorType {
    message: string;
    isError: boolean;
}

const MainStep = () => {
    const [nickError, setNickError] = useState<ErrorType>({
        message: "",
        isError: false,
    });

    const [mailError, setMailError] = useState<ErrorType>({
        message: "",
        isError: false,
    });

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
        error,
    } = context;

    const nextStep = async () => {
        const validations = new Validations(
            context,
            setNickError,
            setMailError
        );

        const isValid = await validations.verify();
        if (!isValid) return;

        // Check if the nickname and mail are avaliable
        const nickResponse = await User.checkAvailability(nickname);
        const mailResponse = await User.checkAvailability(undefined, mail);

        if (nickResponse === false) {
            setNickError({
                message: "This nickname is not avaliable",
                isError: true,
            });
        } else {
            setNickError({ message: "", isError: false });
        }

        if (mailResponse === false) {
            setMailError({
                message: "This mail is not avaliable",
                isError: true,
            });
        } else {
            setMailError({ message: "", isError: false });
        }

        if (!mailResponse || !nickResponse) {
            return false;
        }

        return goNextStep(setStep);
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
                <Input
                    text="nickname..."
                    setValue={setNickname}
                    onEnter={nextStep}
                    maxLength={35}
                    defaultValue={nickname}
                    error={{
                        isError: nickError.isError,
                        message: nickError.message,
                    }}
                />
            </div>

            <div className="relative flex flex-col w-full h-fit items-center justify-center">
                <Input
                    text="mail..."
                    setValue={setMail}
                    onEnter={nextStep}
                    maxLength={120}
                    defaultValue={mail}
                    error={{
                        isError: mailError.isError,
                        message: mailError.message,
                    }}
                />
            </div>

            <Message
                type="error"
                box="text"
                text={error.message}
                isVisible={error.isError}
            />

            <Button inverse={true} text="Next" onClick={nextStep} />
        </div>
    );
};

export default MainStep;
