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
        const title1 = /^#\s/;
        const title2 = /^##\s/;
        const title3 = /^###\s/;

        if (title1.test(item)) {
            return "title1";
        } else if (title2.test(item)) {
            return "title2";
        } else if (title3.test(item)) {
            return "title3";
        }

        return false;
    }

    private removeReType(item: string) {
        const title1 = /^#\s/;
        const title2 = /^##\s/;
        const title3 = /^###\s/;

        if (title1.test(item)) {
            return item.replace(title1, "");
        } else if (title2.test(item)) {
            return item.replace(title2, "");
        } else if (title3.test(item)) {
            return item.replace(title3, "");
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

    moveCursor(div: HTMLDivElement, direction: "end" | "start") {
        if (div) {
            const range = document.createRange();
            const selection = window.getSelection();
            if (!selection || !range) {
                return;
            }

            range.selectNodeContents(div);
            range.collapse(direction === "start");
            selection.removeAllRanges();
            selection.addRange(range);
        }
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
        const type = this.checkReType(text);

        const styledText = this.replaceReStyle(text);
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

    public addLine(index: number) {
        this.setNotes((prev) => {
            const newNotes = [...prev];
            const { type, note } = newNotes[index];

            newNotes[index] = { note: `${note}<br>`, type };
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
