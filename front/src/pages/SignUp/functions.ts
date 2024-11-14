// Libraries
import { NavigateFunction } from "react-router-dom";
import { Dispatch, SetStateAction } from "react";

// Local
import { SignUpContextType } from "./types";
import User from "utils/user";

export const makeSignUp = async (
    context: SignUpContextType | null,
    navigate: NavigateFunction
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
        if (!password || !nickname || !mail || !name) {
            setErrorMessage("Please fill all fields");
            toggleError(true);
            return;
        }

        if (password !== rePassword) {
            setErrorMessage("Passwords do not match");
            toggleError(true);
            return;
        }

        User.signUp(
            name,
            nickname.toLowerCase(),
            mail.toLowerCase(),
            password,
            "Default",
            navigate
        );
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
