// Libraries
import { useEffect, useMemo, useRef, useState } from "react";
import clsx from "clsx";

// Local
import useSafeContext from "hooks/useSafeContext";
import { NotesContext } from "../../context";
import Cursor from "modules/Cursor";
import { NodeElementType } from "../../types";
import Operations from "../utils/Operations";
import useToggle from "hooks/useToggle";

const Paragraph = ({ content, order }: NodeElementType) => {
    const { nodes, nodesUpdater } = useSafeContext(NotesContext);
    const operations = new Operations(nodes);
    const [isSelected, toggleSelected] = useToggle(false);
    const [isHovered, toggleHovered] = useToggle(false);

    const divRef = useRef<HTMLDivElement | null>(null);
    const [position, setPosition] = useState<number>(0);

    const cursor = useMemo(() => new Cursor(divRef.current), [divRef]);
    console.log(content);

    // Sets the cursor position
    // without this, the cursor blinks at the start of the text
    useEffect(() => {
        cursor.position = position;
    }, [position, cursor]);

    // To save in the object the content of the div
    useEffect(() => {
        if (!isSelected) {
            nodesUpdater();
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isSelected]);

    const handleChange = () => {
        // Update the cursor last position
        setPosition(cursor.position);

        // Sets the text in the node array to correspond to the text in the div
        if (divRef.current)
            operations.updateContent(order, divRef.current.innerHTML);
    };

    const handleClick = () => {
        toggleSelected(true);

        setTimeout(() => {
            if (divRef.current) {
                divRef.current.focus();
            }
        }, 0);
    };

    const css = clsx(
        "w-full h-auto bg-base-100 rounded-btn px-2 py-0.5 resize-none outline-none cursor-text",
        {
            "bg-base-200": isHovered,
            "bg-base-300": isSelected,
            "h-[1.5em]": content === "",
        }
    );
    const innerHTML = { __html: content };

    return (
        <div
            contentEditable={isSelected}
            dangerouslySetInnerHTML={innerHTML}
            ref={divRef}
            className={css}
            onInput={handleChange}
            onClick={handleClick}
            onBlur={() => toggleSelected(false)}
            onMouseEnter={() => toggleHovered(true)}
            onMouseLeave={() => toggleHovered(false)}
        />
    );
};

export default Paragraph;
