import { Dispatch, SetStateAction, useEffect, useRef } from "react";
import Cursor from "./Cursor";
import { handleKeyDown } from "./Events";
import { Text } from "./Text";

interface NotesTextType {
    note: string;
    type: string;
}

interface TextareaProps {
    note: string;
    type: string;
    index: number;
    setNotes: Dispatch<SetStateAction<Array<NotesTextType>>>;
}

const getHTMLType = (note: string, type: string) => {
    switch (type) {
        case "title":
            return `<h1 class="text-4xl font-bold">${note}</h1>`;
        default:
            return `<p class="text-lg">${note}</p>`;
    }
};

const Textarea = ({ note, type, index, setNotes }: TextareaProps) => {
    const divRef = useRef<HTMLDivElement | null>(null);
    const textObj = new Text(setNotes);
    const cursorObj = new Cursor(divRef);

    useEffect(() => {
        if (divRef.current) {
            const cursorPos = cursorObj.getCursorPosition();

            divRef.current.innerHTML = getHTMLType(note, type);

            cursorObj.setCursorPosition(cursorPos);
        }
    }, [note]);

    const handleChange = () => {
        if (divRef.current) {
            textObj.handleSetText(index, divRef.current.innerText);

            divRef.current.style.height = `${divRef.current.scrollHeight}px`;
        }
    };

    return (
        <div
            contentEditable
            ref={divRef}
            className="w-full h-auto bg-base-200 resize-none outline-none"
            onKeyDown={(event) => handleKeyDown(event, index, textObj)}
            onInput={handleChange}
        ></div>
    );
};

export default Textarea;
