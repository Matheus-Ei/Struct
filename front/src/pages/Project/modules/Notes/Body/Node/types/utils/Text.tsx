// Local
import { NodeElementType } from "../../../types";
import { SetStateType } from "types/global";
import { NotesContextType } from "../../../context";
import Regex from "./Regex";

export class Text {
    private nodes: {
        value: Array<NodeElementType>;
        set: SetStateType<Array<NodeElementType>>;
    };
    private regex: Regex = new Regex();

    constructor(useNotesContext: NotesContextType) {
        this.nodes = useNotesContext.nodes;
    }

    public setType(index: number, type: string) {
        this.nodes.set((prev) => {
            const newNotes = [...prev];
            const { content } = newNotes[index];
            newNotes[index] = { content, type, order: index };
            return newNotes;
        });
    }

    public setNote(index: number, content: string) {
        this.nodes.set((prev) => {
            const newNotes = [...prev];
            const { type } = newNotes[index];
            newNotes[index] = { content, type, order: index };

            return newNotes;
        });
    }

    /*     public setFocus(index: number) {
        if (!this.nodes.value[index]) return null;
        const element = this.nodes.value[index].element;
        const cursor = new Cursor(element);
        cursor.focus();
        cursor.move("end");
    } */

    public setText(index: number, text: string) {
        const type = this.regex.checkType(text); // Check if there are regex that identifies the type, returns the type
        const styledText = this.regex.replaceStyle(text); // Replace inline styles with their correspondents in html
        const returnText = this.regex.removeType(styledText); // Remove the regex that identifies the type

        this.setNote(index, returnText);

        if (type) {
            this.setType(index, type);
            // this.setFocus(index + 1);
        }
    }

    public addLine(index: number) {
        this.nodes.set((prev) => {
            const newNotes = [...prev];
            const { type, content } = newNotes[index];

            newNotes[index] = { content: `${content}<br>`, type, order: index };
            return newNotes;
        });
    }

    public addNote(index: number) {
        this.nodes.set((prev) => {
            const newNotes = [...prev];
            newNotes.splice(index + 1, 0, {
                content: "",
                type: "paragraph",
                order: index,
            });
            return newNotes;
        });
    }

    public removeNote(index: number) {
        this.nodes.set((prev) => {
            const newNotes = [...prev];
            newNotes.splice(index, 1);
            return newNotes;
        });
    }
}
