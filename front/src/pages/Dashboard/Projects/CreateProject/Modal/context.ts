// Library
import { createContext } from "react";
import { ErrorType, SetStateType } from "types/global";

// Local

export interface CreateProjectContextType {
    title: {
        value: string;
        set: SetStateType<string>;
        error: ErrorType;
        setError: SetStateType<ErrorType>;
    };
    description: {
        value: string;
        set: SetStateType<string>;
        error: ErrorType;
        setError: SetStateType<ErrorType>;
    };
    setModal: SetStateType<boolean>;
}

export const CreateProjectContext = createContext<
    CreateProjectContextType | undefined
>(undefined);
