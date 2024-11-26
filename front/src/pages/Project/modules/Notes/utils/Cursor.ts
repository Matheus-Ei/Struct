class Cursor {
    goNextLine() {
        const selection = window.getSelection();
        const range = selection?.getRangeAt(0);
        if (!selection || !range) return;

        let currentNode = range.startContainer;

        while (currentNode) {
            if (currentNode.nextSibling) {
                currentNode = currentNode.nextSibling;

                if (currentNode.nodeType === Node.ELEMENT_NODE) {
                    if (["BR", "P", "DIV"].includes(currentNode.nodeName)) {
                        range.setStart(currentNode, 0);
                        range.collapse(true);
                        selection.removeAllRanges();
                        selection.addRange(range);
                        break;
                    }
                } else if (currentNode.nodeType === Node.TEXT_NODE) {
                    range.setStart(currentNode, 0);
                    range.collapse(true);
                    selection.removeAllRanges();
                    selection.addRange(range);
                    break;
                }
            }
        }
    }
}

export default Cursor;
