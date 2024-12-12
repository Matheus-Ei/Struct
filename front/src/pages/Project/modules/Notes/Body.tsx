// Libraries
import { MouseEvent, RefObject, useRef, useState } from "react";
import { NotesContext } from "./context";
import { NotesTextType } from "./utils/types";

const sendFocus = (event: MouseEvent, bodyRef: RefObject<HTMLElement>) => {
    if (event.target === event.currentTarget) {
        const firstElement = bodyRef.current?.children[0] as HTMLElement;
        firstElement?.focus();
    }
};

const Body = () => {
    const bodyRef = useRef<HTMLDivElement>(null);

    const [notes, setNotes] = useState<Array<NotesTextType>>([
        { note: "", type: "paragraph", element: null },
    ]);

    const contextValue = {
        notes: { value: notes, set: setNotes },
        bodyRef,
    };

    return (
        <NotesContext.Provider value={contextValue}>
            <div
                ref={bodyRef}
                className="flex flex-col gap-1 w-full h-3/4"
                onClick={(event) => sendFocus(event, bodyRef)}
            ></div>
        </NotesContext.Provider>
    );
};

export default Body;
