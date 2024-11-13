// Local
import { NotesPageContextType } from "./types";
import { Text } from "./Text";

export const handleKeyDown = (
    event: any,
    index: number,
    textObj: Text,
    context: NotesPageContextType
) => {
    // Add textArea
    if (event.key === "Enter" && !event.shiftKey) {
        event.preventDefault();
        textObj.addNote(index);

        textObj.setFocus(index + 1);
    }

    // Delete textArea
    if (event.key === "Backspace" && event.target.innerText.trim() === "") {
        if (index === 0) {
            return;
        }

        event.preventDefault();
        textObj.removeNote(index);

        textObj.setFocus(index - 1);
    }

    // Arrow down
    if (event.key === "ArrowDown") {
        event.preventDefault();

        textObj.setFocus(index + 1);
    }

    // Arrow up
    if (event.key === "ArrowUp") {
        if (index === 0) {
            return;
        }

        event.preventDefault();

        textObj.setFocus(index - 1);
    }

    // Make the textarea bigger
    if (event.key === "Enter" && event.shiftKey) {
        textObj.addLine(index);
        event.preventDefault();
    }
};
