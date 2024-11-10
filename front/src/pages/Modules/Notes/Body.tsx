import { createContext, MouseEvent, useRef, useState } from "react";
import Textareas from "./Textareas";
import { NotesPageContextType, NotesTextType } from "./utils/types";

export const NotesPageContext = createContext<NotesPageContextType | null>(
    null
);

const Body = () => {
    const [notes, setNotes] = useState<Array<NotesTextType>>([
        { note: "", type: "paragraph", element: null },
    ]);
    const divBodyRef = useRef<HTMLDivElement>(null);

    const sendFocus = (event: MouseEvent) => {
        if (event.target === event.currentTarget) {
            const firstElement = divBodyRef.current?.children[0] as HTMLElement;
            firstElement.focus();
        }
    };

    const renderNotes = (item: NotesTextType, index: number) => {
        return (
            <Textareas
                note={item.note}
                type={item.type}
                index={index}
                key={index}
            />
        );
    };

    return (
        <NotesPageContext.Provider
            value={{
                notes,
                setNotes,
                divBodyRef,
            }}
        >
            <div
                ref={divBodyRef}
                className="flex flex-col gap-1 w-full h-3/4"
                onClick={sendFocus}
            >
                {notes.map(renderNotes)}
            </div>
        </NotesPageContext.Provider>
    );
};

export default Body;
