export const handleKeyDown = (event: any, index: number, textObg: any) => {
    // Add textArea
    if (event.key === "Enter" && !event.shiftKey) {
        event.preventDefault();
        textObg.addNote(index);

        // Handle Focus
        const parentDiv = document.getElementById("notesDiv");
        if (!parentDiv) {
            return;
        }

        const divs = parentDiv.querySelectorAll("div");
        const divsArray = Array.from(divs);

        if (index < divsArray.length - 1) {
            const nextDiv = divsArray[index + 1] as HTMLDivElement;
            setTimeout(() => {
                nextDiv.focus();
            }, 10);
        }
    }

    // Delete textArea
    if (event.key === "Backspace" && event.target.innerText.trim() === "") {
        if (index === 0) {
            return;
        }

        event.preventDefault();
        textObg.removeNote(index);

        // Handle Focus
        const parentDiv = document.getElementById("notesDiv");
        if (!parentDiv) {
            return;
        }

        const divs = parentDiv.querySelectorAll("div");
        const divsArray = Array.from(divs);

        const preDiv = divsArray[index - 1] as HTMLDivElement;
        preDiv.focus();
    }

    // Arrow down
    if (event.key === "ArrowDown") {
        event.preventDefault();

        // Move focous
        const parentDiv = document.getElementById("notesDiv");
        const divs = parentDiv ? parentDiv.querySelectorAll("div") : [];
        const divsArray = Array.from(divs);

        if (index < divsArray.length - 1) {
            const nextDiv = divsArray[index + 1] as HTMLDivElement;
            nextDiv.focus();
        }
    }

    // Arrow up
    if (event.key === "ArrowUp") {
        if (index === 0) {
            return;
        }

        event.preventDefault();

        // Move focous
        const parentDiv = document.getElementById("notesDiv");
        const divs = parentDiv ? parentDiv.querySelectorAll("div") : [];
        const divsArray = Array.from(divs);

        const preDiv = divsArray[index - 1] as HTMLDivElement;
        preDiv.focus();
    }

    // Make the textarea bigger
    if (event.key === "Enter" && event.shiftKey) {
        event.preventDefault();
    }
};
