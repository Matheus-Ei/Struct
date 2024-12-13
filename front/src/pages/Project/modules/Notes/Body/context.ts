// Libraries
import { createContext, RefObject } from "react";
import { SetStateType } from "types/global";

// Local
import { NodeElementType } from "./types";

export interface NotesContextType {
    nodes: {
        value: Array<NodeElementType>;
        set: SetStateType<Array<NodeElementType>>;
    };

    bodyRef: RefObject<HTMLDivElement>;
}

export const NotesContext = createContext<NotesContextType | undefined>(
    undefined
);
