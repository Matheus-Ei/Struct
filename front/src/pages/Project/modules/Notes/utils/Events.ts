// Local
import { KeyboardEvent } from "react";
import { Text } from "./Text";

export const handleKeyDown = (
    event: KeyboardEvent<HTMLDivElement>,
    index: number,
    textEditor: Text
) => {
    const targetEvent = event.target as HTMLElement;

    // Add textArea
    if (event.key === "Enter" && !event.shiftKey) {
        event.preventDefault();
        textEditor.addNote(index);

        textEditor.setFocus(index + 1);
    }

    // Delete textArea
    if (event.key === "Backspace" && targetEvent.innerText.trim() === "") {
        if (index === 0) return;

        event.preventDefault();
        textEditor.removeNote(index);

        textEditor.setFocus(index - 1);
    }

    // Arrow down
    if (event.key === "ArrowDown") {
        event.preventDefault();

        textEditor.setFocus(index + 1);
    }

    // Arrow up
    if (event.key === "ArrowUp") {
        if (index === 0) return;

        event.preventDefault();

        textEditor.setFocus(index - 1);
    }

    // Make the textarea bigger
    if (event.key === "Enter" && event.shiftKey) {
        textEditor.addLine(index);
        event.preventDefault();
    }
};
