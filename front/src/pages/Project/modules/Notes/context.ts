// Libraries
import { createContext, RefObject } from "react";
import { SetStateType } from "types/global";

// Local
import { NotesTextType } from "./utils/types";

export interface NotesContextType {
    notes: {
        value: Array<NotesTextType>;
        set: SetStateType<Array<NotesTextType>>;
    };

    bodyRef: RefObject<HTMLDivElement>;
}

export const NotesContext = createContext<NotesContextType | undefined>(
    undefined
);
