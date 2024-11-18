// Libraries
import { Dispatch, SetStateAction } from "react";
import { ErrorType } from "types/global";

export interface SignUpContextType {
    step: number;
    setStep: Dispatch<SetStateAction<number>>;

    name: string | null;
    setName: Dispatch<SetStateAction<string | null>>;

    mail: string | null;
    setMail: Dispatch<SetStateAction<string | null>>;

    nickname: string | null;
    setNickname: Dispatch<SetStateAction<string | null>>;

    password: string | null;
    setPassword: Dispatch<SetStateAction<string | null>>;

    rePassword: string | null;
    setRePassword: Dispatch<SetStateAction<string | null>>;

    error: ErrorType;
    setError: Dispatch<SetStateAction<ErrorType>>;
}
