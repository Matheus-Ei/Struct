// Libraries
import { useEffect, useMemo, useRef, useState } from "react";

// Local
import useSafeContext from "hooks/useSafeContext";
import { NotesContext } from "../../context";
import Cursor from "modules/Cursor";
import { Text } from "./utils/Text";
import { NodeElementType } from "../../types";

const Paragraph = ({ content, order, type }: NodeElementType) => {
    const [position, setPosition] = useState<number>(0);

    const divRef = useRef<HTMLDivElement | null>(null);
    const cursor = useMemo(() => new Cursor(divRef.current), [divRef]);

    // Sets the cursor position
    // without this, the cursor blinks at the start of the text
    useEffect(() => {
        cursor.position = position;
    }, [position, cursor]);

    const useNotesContext = useSafeContext(NotesContext);
    const editor = new Text(useNotesContext);

    const handleChange = () => {
        // Update the cursor last position
        setPosition(cursor.position);
        // Sets the text in the node array to correspond to the text in the div
        if (divRef.current) editor.setText(order, divRef.current.innerHTML);
    };

    const innerHTML = { __html: content };
    return (
        <div
            contentEditable
            dangerouslySetInnerHTML={innerHTML}
            ref={divRef}
            className="w-full h-auto bg-base-200 rounded-btn px-2 py-0.5 resize-none outline-none"
            onInput={handleChange}
        />
    );
};

export default Paragraph;
