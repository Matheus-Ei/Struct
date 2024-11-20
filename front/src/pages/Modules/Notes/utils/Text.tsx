// Libraries
import { Dispatch, SetStateAction } from "react";

// Local
import { NotesPageContextType, NotesTextType } from "./types";

export class Text {
    private setNotes: Dispatch<SetStateAction<Array<NotesTextType>>>;
    private notes: Array<NotesTextType>;
    private context: NotesPageContextType;

    constructor(context: NotesPageContextType) {
        this.setNotes = context.setNotes;
        this.notes = context.notes;
        this.context = context;
    }

    public setType(index: number, type: string) {
        this.setNotes((prev) => {
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

    moveCursor(div: HTMLElement, direction: "end" | "start") {
        if (div) {
            const range = document.createRange();
            const selection = window.getSelection();
            if (!selection || !range) return;

            range.selectNodeContents(div);
            range.collapse(direction === "start");
            selection.removeAllRanges();
            selection.addRange(range);
        }
    }

    public setFocus(index: number) {
        if (!this.notes[index]) return null;

        const element = this.notes[index].element;

        if (!element) return null;

        element.focus();
        this.moveCursor(element, "end");
    }

    public setNote(index: number, note: string) {
        this.setNotes((prev) => {
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
        this.setNotes((prev) => {
            const newNotes = [...prev];
            const { type, note, element } = newNotes[index];

            newNotes[index] = { note: `${note}<br>`, type, element };
            return newNotes;
        });
    }

    public addNote(index: number) {
        this.setNotes((prev) => {
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
        this.setNotes((prev) => {
            const newNotes = [...prev];
            newNotes.splice(index, 1);
            return newNotes;
        });
    }

    public setDefaultType(index: number) {}
}
