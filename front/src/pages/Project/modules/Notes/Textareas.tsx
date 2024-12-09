// Libraries
import useDefinedContext from "hooks/useDefinedContext";
import { useEffect } from "react";

// Local
import { NotesContext } from "./Body";
import Paragraph from "./Types/Paragraph";
import Title from "./Types/Title";

interface TextareasProps {
    note: string;
    type: string;
    index: number;
}

const Textareas = ({ note, type, index }: TextareasProps) => {
    const { setNotes, mainDivRef } = useDefinedContext(NotesContext);

    useEffect(() => {
        setNotes((prev) => {
            const prevBase = [...prev];
            const elements = mainDivRef.current?.children;

            const notesWithElements = prevBase.map((item, index) => {
                if (!elements) return item;

                item.element = elements[index] as HTMLElement;
                return item;
            });

            return notesWithElements;
        });
    }, [note, type, index, mainDivRef, setNotes]);

    switch (type) {
        case "title1":
            return <Title note={note} index={index} titleType={1} />;

        case "title2":
            return <Title note={note} index={index} titleType={2} />;

        case "title3":
            return <Title note={note} index={index} titleType={3} />;

        default:
            return <Paragraph note={note} index={index} />;
    }
};

export default Textareas;
