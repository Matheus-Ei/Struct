import { Dispatch, SetStateAction } from "react";
import Paragraph from "./Types/Paragraph";
import Title from "./Types/Title";

interface NotesTextType {
    note: string;
    type: string;
}

interface TextareasProps {
    note: string;
    type: string;
    index: number;
    setNotes: Dispatch<SetStateAction<Array<NotesTextType>>>;
}

const Textareas = ({ note, type, index, setNotes }: TextareasProps) => {
    switch (type) {
        case "title1":
            return (
                <Title
                    note={note}
                    index={index}
                    setNotes={setNotes}
                    titleType={1}
                />
            );

        case "title2":
            return (
                <Title
                    note={note}
                    index={index}
                    setNotes={setNotes}
                    titleType={2}
                />
            );

        case "title3":
            return (
                <Title
                    note={note}
                    index={index}
                    setNotes={setNotes}
                    titleType={3}
                />
            );

        default:
            return <Paragraph note={note} index={index} setNotes={setNotes} />;
    }
};

export default Textareas;
