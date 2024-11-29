// Libraries
import { NavigateFunction } from "react-router-dom";

// Local
import { SignUpContextType } from "./types";
import { SetStateType } from "types/global";
import User from "services/user";

export const makeSignUp = async (
    context: SignUpContextType | null,
    navigate: NavigateFunction
) => {
    if (!context) return null;
    const { password, rePassword, nickname, mail, name, setError } = context;

    try {
        if (!password || !nickname || !mail || !name) {
            setError({ isError: true, message: "Please fill all fields" });
            return;
        }

        if (password !== rePassword) {
            setError({ isError: true, message: "Passwords do not match" });
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
        setError({
            isError: true,
            message: "An error occurred, please try again",
        });
    }
};

export const goPrevStep = (setStep: SetStateType<number>) => {
    setStep((prev) => {
        if (prev === 0) return prev;

        return prev - 1;
    });
};

export const goNextStep = (setStep: SetStateType<number>) => {
    setStep((prev) => {
        return prev + 1;
    });
};
