import { useState } from "react";
import Textareas from "./Textareas";

interface NotesTextType {
    note: string;
    type: string;
}

const Body = () => {
    const [notes, setNotes] = useState<Array<NotesTextType>>([
        { note: "", type: "paragraph" },
    ]);

    const sendFocus = (event: any) => {
        if (event.target === event.currentTarget) {
            const parentDiv = document.getElementById("notesDiv");
            const divs = parentDiv ? parentDiv.querySelectorAll("div") : [];
            const divsArray = Array.from(divs);

            const preDiv = divsArray[0] as HTMLDivElement;
            preDiv.focus();
        }
    };

    const renderNotes = (item: NotesTextType, index: number) => {
        return (
            <Textareas
                note={item.note}
                type={item.type}
                index={index}
                key={index}
                setNotes={setNotes}
            />
        );
    };

    return (
        <div
            id="notesDiv"
            className="flex flex-col gap-1 w-full h-3/4"
            onClick={sendFocus}
        >
            {notes.map(renderNotes)}
        </div>
    );
};

export default Body;
