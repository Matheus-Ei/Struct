// Library
import { createContext } from "react";

// Local
import { ErrorType, SetStateType } from "types/global";

export interface CreateProjectContextType {
    title: {
        value: string;
        set: SetStateType<string>;
        error: ErrorType;
        setError: SetStateType<ErrorType>;
        validate: () => boolean;
    };
    description: {
        value: string;
        set: SetStateType<string>;
        error: ErrorType;
        setError: SetStateType<ErrorType>;
        validate: () => boolean;
    };
    setModal: SetStateType<boolean>;
}

export const CreateProjectContext = createContext<
    CreateProjectContextType | undefined
>(undefined);
