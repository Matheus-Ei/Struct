// Libraries
import { ErrorType, SetStateType } from "types/global";

export interface SignUpContextType {
    step: number;
    setStep: SetStateType<number>;

    name: string | undefined;
    setName: SetStateType<string | undefined>;

    mail: string | undefined;
    setMail: SetStateType<string | undefined>;

    nickname: string | undefined;
    setNickname: SetStateType<string | undefined>;

    password: string | undefined;
    setPassword: SetStateType<string | undefined>;

    rePassword: string | undefined;
    setRePassword: SetStateType<string | undefined>;

    error: ErrorType;
    setError: SetStateType<ErrorType>;
}
