// Libraries
import { useEffect, useMemo, useRef, useState } from "react";

// Local
import useSafeContext from "hooks/useSafeContext";
import { NotesContext } from "../../context";
import Cursor from "modules/Cursor";
import { NodeElementType } from "../../types";
import Operations from "../utils/Operations";

const Paragraph = ({ content, order }: NodeElementType) => {
    const { nodes } = useSafeContext(NotesContext);
    const operations = new Operations(nodes);

    const divRef = useRef<HTMLDivElement | null>(null);
    const [position, setPosition] = useState<number>(0);

    const cursor = useMemo(() => new Cursor(divRef.current), [divRef]);

    // Sets the cursor position
    // without this, the cursor blinks at the start of the text
    useEffect(() => {
        cursor.position = position;
    }, [position, cursor]);

    const handleChange = () => {
        // Update the cursor last position
        setPosition(cursor.position);

        // Sets the text in the node array to correspond to the text in the div
        if (divRef.current)
            operations.updateContent(order, divRef.current.innerHTML);
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
