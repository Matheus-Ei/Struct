// Libraries
import { Dispatch, RefObject, SetStateAction } from "react";

export interface NotesTextType {
    note: string;
    type: string;
    element: HTMLElement | null;
}

export interface NotesPageContextType {
    notes: Array<NotesTextType>;
    setNotes: Dispatch<SetStateAction<Array<NotesTextType>>>;
    divBodyRef: RefObject<HTMLDivElement>;
}
