// Libraries
import { createContext, RefObject } from "react";
import { SetStateType } from "types/global";

// Local
import { NodeElementType } from "./types";

export interface NodeState {
    value: Array<NodeElementType>;
    set: SetStateType<Array<NodeElementType>>;
}

export interface NotesContextType {
    nodes: NodeState;

    bodyRef: RefObject<HTMLDivElement>;
}

export const NotesContext = createContext<NotesContextType | undefined>(
    undefined
);
