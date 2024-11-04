import { Dispatch, SetStateAction, useRef } from "react";
import { handleKeyDown, handleChange } from "../Events";
import { Text } from "../Text";

interface NotesTextType {
    note: string;
    type: string;
}

interface ParagraphProps {
    note: string;
    index: number;
    setNotes: Dispatch<SetStateAction<Array<NotesTextType>>>;
}

const Paragraph = ({ note, index, setNotes }: ParagraphProps) => {
    const divRef = useRef<HTMLDivElement | null>(null);
    const textObj = new Text(setNotes);

    return (
        <div
            contentEditable
            ref={divRef}
            className="w-full bg-base-200 resize-none outline-none"
            onKeyDown={(event) => handleKeyDown(event, index, textObj)}
            defaultValue={note}
            onInput={() => handleChange(divRef, setNotes, index)}
        ></div>
    );
};

export default Paragraph;
