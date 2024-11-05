import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { handleKeyDown } from "../utils/Events";
import { Text } from "../utils/Text";
import Cursor from "../utils/Cursor";

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
    const [position, setPosition] = useState<number>(0);

    const divRef = useRef<HTMLDivElement | null>(null);
    const textObj = new Text(setNotes);
    const cursorObj = new Cursor(divRef);

    useEffect(() => {
        cursorObj.setCursorPosition(position);
    }, [position]);

    const onChange = () => {
        setPosition(cursorObj.getCursorPosition());
        if (divRef.current) {
            textObj.handleSetText(index, divRef.current.innerHTML);
        }
    };

    return (
        <div
            contentEditable
            dangerouslySetInnerHTML={{
                __html: note,
            }}
            ref={divRef}
            className="w-full h-auto bg-base-100 resize-none outline-none"
            onKeyDown={(event) => handleKeyDown(event, index, textObj)}
            onInput={onChange}
        ></div>
    );
};

export default Paragraph;
