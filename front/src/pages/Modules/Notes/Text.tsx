import { Dispatch, SetStateAction } from "react";

interface NotesTextType {
    note: string;
    type: string;
}

export class Text {
    private setNotes: Dispatch<SetStateAction<Array<NotesTextType>>>;

    constructor(setNotes: Dispatch<SetStateAction<Array<NotesTextType>>>) {
        this.setNotes = setNotes;
    }

    public setType(index: number, type: string) {
        this.setNotes((prev) => {
            const newNotes = [...prev];
            const { note } = newNotes[index];
            newNotes[index] = { note, type };
            return newNotes;
        });
    }

    private checkRe(item: string) {
        const title = /^#\s/;

        if (title.test(item)) {
            return "title";
        }

        return false;
    }

    private removeRe(item: string) {
        const title = /^#\s/;

        if (title.test(item)) {
            return item.replace(title, "");
        }

        return item;
    }

    public setFocus(index: number) {
        setTimeout(() => {
            const parentDiv = document.getElementById("notesDiv");
            const divs = parentDiv ? parentDiv.querySelectorAll("div") : [];
            const divsArray = Array.from(divs);

            const div = divsArray[index] as HTMLDivElement;
            div.focus();
        }, 10);
    }

    public setNote(index: number, note: string) {
        this.setNotes((prev) => {
            const newNotes = [...prev];
            const { type } = newNotes[index];
            newNotes[index] = { note, type };

            return newNotes;
        });
    }

    public handleSet(index: number, text: string) {
        const type = this.checkRe(text);
        const newText = this.removeRe(text);

        this.setNote(index, newText);

        if (type) {
            this.setType(index, type);
            this.setFocus(index);
        }
    }

    public addNote(index: number) {
        this.setNotes((prev) => {
            const newNotes = [...prev];
            newNotes.splice(index + 1, 0, { note: "", type: "paragraph" });
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
