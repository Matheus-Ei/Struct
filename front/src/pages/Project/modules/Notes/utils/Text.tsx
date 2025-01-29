// Local
import { NotesTextType } from "./types";
import { SetStateType } from "types/global";
import Cursor from "modules/Cursor";
import { NotesContextType } from "../context";

export class Text {
    private notes: {
        value: Array<NotesTextType>;
        set: SetStateType<Array<NotesTextType>>;
    };

    constructor(useNotesContext: NotesContextType) {
        this.notes = useNotesContext.notes;
    }

    public setType(index: number, type: string) {
        this.notes.set((prev) => {
            const newNotes = [...prev];
            const { note, element } = newNotes[index];
            newNotes[index] = { note, type, element };
            return newNotes;
        });
    }

    private checkReType(item: string) {
        const title1 = /^#\s/;
        const title2 = /^##\s/;
        const title3 = /^###\s/;

        if (title1.test(item)) return "title1";
        else if (title2.test(item)) return "title2";
        else if (title3.test(item)) return "title3";

        return false;
    }

    private removeReType(item: string) {
        const title1 = /^#\s/;
        const title2 = /^##\s/;
        const title3 = /^###\s/;

        if (title1.test(item)) return item.replace(title1, "");
        else if (title2.test(item)) return item.replace(title2, "");
        else if (title3.test(item)) return item.replace(title3, "");

        return item;
    }

    private replaceReStyle(item: string) {
        const bold = /\*\*(.*?)\*\*/g;

        if (bold.test(item)) return item.replace(bold, "<strong>$1</strong>");

        return item;
    }

    public setFocus(index: number) {
        if (!this.notes.value[index]) return null;
        const element = this.notes.value[index].element;
        const cursor = new Cursor(element);
        cursor.focus();
        cursor.move("end");
    }

    public setNote(index: number, note: string) {
        this.notes.set((prev) => {
            const newNotes = [...prev];
            const { type, element } = newNotes[index];
            newNotes[index] = { note, type, element };

            return newNotes;
        });
    }

    public handleSetText(index: number, text: string) {
        // Regular expressions operations
        const type = this.checkReType(text);
        const styledText = this.replaceReStyle(text);
        const returnText = this.removeReType(styledText);

        this.setNote(index, returnText);

        if (type) {
            this.setType(index, type);
            this.setFocus(index + 1);
        }
    }

    public addLine(index: number) {
        this.notes.set((prev) => {
            const newNotes = [...prev];
            const { type, note, element } = newNotes[index];

            newNotes[index] = { note: `${note}<br>`, type, element };
            return newNotes;
        });
    }

    public addNote(index: number) {
        this.notes.set((prev) => {
            const newNotes = [...prev];
            newNotes.splice(index + 1, 0, {
                note: "",
                type: "paragraph",
                element: null,
            });
            return newNotes;
        });
    }

    public removeNote(index: number) {
        this.notes.set((prev) => {
            const newNotes = [...prev];
            newNotes.splice(index, 1);
            return newNotes;
        });
    }

    public setDefaultType(index: number) {}
}
