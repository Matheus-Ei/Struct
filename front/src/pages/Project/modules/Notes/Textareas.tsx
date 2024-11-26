// Libraries
import { useContext, useEffect } from "react";

// Local
import { NotesPageContext } from "./Body";
import Paragraph from "./Types/Paragraph";
import Title from "./Types/Title";

interface TextareasProps {
    note: string;
    type: string;
    index: number;
}

const Textareas = ({ note, type, index }: TextareasProps) => {
    const context = useContext(NotesPageContext);

    useEffect(() => {
        context?.setNotes((prev) => {
            const prevBase = [...prev];
            const elements = context?.divBodyRef.current?.children;

            const notesWithElements = prevBase.map((item, index) => {
                if (!elements) return item;

                item.element = elements[index] as HTMLElement;
                return item;
            });

            return notesWithElements;
        });
    }, [note, type, index, context]);

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
