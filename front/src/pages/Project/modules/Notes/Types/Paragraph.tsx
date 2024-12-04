// Libraries
import {
    useContext,
    useEffect,
    useMemo,
    useRef,
    useState,
} from "react";

// Local
import { handleKeyDown } from "../utils/Events";
import { NotesContext } from "../Body";
import { Text } from "../utils/Text";
import Cursor from "modules/Cursor";

interface ParagraphProps {
    note: string;
    index: number;
}

const Paragraph = ({ note, index }: ParagraphProps) => {
    const [position, setPosition] = useState<number>(0);
    const divRef = useRef<HTMLDivElement | null>(null);
    const cursor = useMemo(() => new Cursor(divRef.current), [divRef]);

    useEffect(() => {
        cursor.position = position;
    }, [position, cursor]);

    const useNotesContext = useContext(NotesContext);
    if (!useNotesContext) return null;
    const textEditor = new Text(useNotesContext);

    const handleChange = () => {
        setPosition(cursor.position);
        if (divRef.current)
            textEditor.handleSetText(index, divRef.current.innerHTML);
    };

    const innerHTML = { __html: note };

    return (
        <div
            contentEditable
            dangerouslySetInnerHTML={innerHTML}
            ref={divRef}
            className="w-full h-auto bg-base-100 resize-none outline-none"
            onKeyDown={(event) => handleKeyDown(event, index, textEditor)}
            onInput={handleChange}
        ></div>
    );
};

export default Paragraph;
