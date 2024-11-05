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

    private checkReType(item: string) {
        const title = /^#\s/;

        if (title.test(item)) {
            return "title";
        }

        return false;
    }

    private removeReType(item: string) {
        const title = /^#\s/;

        if (title.test(item)) {
            return item.replace(title, "");
        }

        return item;
    }

    private replaceReStyle(item: string) {
        const bold = /\*\*(.*?)\*\*/g;

        if (bold.test(item)) {
            return item.replace(bold, "<strong>$1</strong>");
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

    private replaceEscapeHTML(str: string | null) {
        if (!str) {
            return "";
        }

        return str
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;")
            .replace(/`/g, "&#x60;")
            .replace(/\//g, "&#x2F;")
            .replace(/\\/g, "&#x5C;");
    }

    public handleSetText(index: number, text: string) {
        const secureText = this.replaceEscapeHTML(text);
        console.log("SecureText", secureText);
        const type = this.checkReType(secureText);

        const styledText = this.replaceReStyle(secureText);
        const returnText = this.removeReType(styledText);

        this.setNote(index, returnText);

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
