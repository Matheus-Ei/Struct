import { Dispatch, SetStateAction } from "react";
import Request from "services/Request";
import { SignUpContextType } from "./types";

export const makeSignUp = async (
    context: SignUpContextType | null,
    navigate: (path: string) => void
) => {
    if (!context) return null;
    const {
        password,
        rePassword,
        nickname,
        mail,
        name,
        toggleError,
        setErrorMessage,
    } = context;

    try {
        if (
            password === null ||
            nickname === null ||
            mail === null ||
            name === null
        ) {
            setErrorMessage("Please fill all fields");
            toggleError(true);
            return;
        }

        if (password !== rePassword) {
            setErrorMessage("Passwords do not match");
            toggleError(true);
            return;
        }

        await Request.post("user/register", {
            name,
            nickname: nickname.toLowerCase(),
            mail: mail.toLowerCase(),
            password,
        });

        navigate("/dashboard");
    } catch {
        setErrorMessage("An error occurred, please try again");
        toggleError(true);
    }
};

export const goPrevStep = (setStep: Dispatch<SetStateAction<number>>) => {
    setStep((prev) => {
        if (prev === 0) return prev;

        return prev - 1;
    });
};

export const goNextStep = (setStep: Dispatch<SetStateAction<number>>) => {
    setStep((prev) => {
        return prev + 1;
    });
};
