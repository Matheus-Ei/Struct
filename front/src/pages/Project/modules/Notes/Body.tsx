// Libraries
import { createContext, MouseEvent, useRef, useState } from "react";

// Local
import { NotesContextType, NotesTextType } from "./utils/types";
import Textareas from "./Textareas";

export const NotesContext = createContext<NotesContextType | null>(null);

const Body = () => {
    const [notes, setNotes] = useState<Array<NotesTextType>>([
        { note: "", type: "paragraph", element: null },
    ]);

    const mainDivRef = useRef<HTMLDivElement>(null);

    const sendFocus = (event: MouseEvent) => {
        if (event.target === event.currentTarget) {
            const firstElement = mainDivRef.current?.children[0] as HTMLElement;
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
        <NotesContext.Provider
            value={{
                notes,
                setNotes,
                mainDivRef,
            }}
        >
            <div
                ref={mainDivRef}
                className="flex flex-col gap-1 w-full h-3/4"
                onClick={sendFocus}
            >
                {notes.map(renderNotes)}
            </div>
        </NotesContext.Provider>
    );
};

export default Body;
