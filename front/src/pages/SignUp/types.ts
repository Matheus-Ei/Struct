import { Dispatch, SetStateAction } from "react";

export interface SignUpContextType {
    step: number;
    setStep: Dispatch<SetStateAction<number>>;

    isError: boolean;
    toggleError: (value?: boolean) => void;

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

    errorMessage: string | null;
    setErrorMessage: Dispatch<SetStateAction<string | null>>;
}
