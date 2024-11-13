// Libraries
import { useContext, useEffect, useMemo, useRef, useState } from "react";

// Local
import { handleKeyDown } from "../utils/Events";
import { NotesPageContext } from "../Body";
import Cursor from "../utils/Cursor";
import { Text } from "../utils/Text";

interface ParagraphProps {
    note: string;
    index: number;
}

const Paragraph = ({ note, index }: ParagraphProps) => {
    const [position, setPosition] = useState<number>(0);

    const context = useContext(NotesPageContext);

    const divRef = useRef<HTMLDivElement | null>(null);
    const cursorObj = useMemo(() => new Cursor(divRef), [divRef]);

    useEffect(() => {
        cursorObj.setCursorPosition(position);
    }, [position, cursorObj]);

    if (!context) {
        return null;
    }

    const textObj = new Text(context);

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
            onKeyDown={(event) => handleKeyDown(event, index, textObj, context)}
            onInput={onChange}
        ></div>
    );
};

export default Paragraph;
