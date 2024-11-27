// Libraries
import { RefObject } from "react";
import { SetStateType } from "types/global";

export interface NotesTextType {
    note: string;
    type: string;
    element: HTMLElement | null;
}

export interface NotesPageContextType {
    notes: Array<NotesTextType>;
    setNotes: SetStateType<Array<NotesTextType>>;
    mainDivRef: RefObject<HTMLDivElement>;
}
