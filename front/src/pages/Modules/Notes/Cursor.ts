class Cursor {
    private divRef: React.RefObject<HTMLElement>;

    constructor(divRef: React.RefObject<HTMLElement>) {
        this.divRef = divRef;
    }

    getCursorPosition() {
        const selection = window.getSelection();
        if (selection && selection.rangeCount > 0) {
            const range = selection.getRangeAt(0);
            const preRange = range.cloneRange();
            preRange.selectNodeContents(this.divRef.current!);
            preRange.setEnd(range.endContainer, range.endOffset);
            return preRange.toString().length;
        }
        return 0;
    }

    setCursorPosition(pos: number) {
        const selection = window.getSelection();
        if (!selection || !this.divRef.current) return;

        const nodeStack = [this.divRef.current];
        let node;
        let charCount = 0;
        let found = false;

        while (nodeStack.length > 0 && !found) {
            node = nodeStack.pop();
            if (!node) continue;

            if (node.nodeType === 3) {
                const textLength = node.textContent?.length || 0;
                if (charCount + textLength >= pos) {
                    const range = document.createRange();
                    range.setStart(node, pos - charCount);
                    range.collapse(true);
                    selection.removeAllRanges();
                    selection.addRange(range);
                    found = true;
                } else {
                    charCount += textLength;
                }
            } else {
                for (let i = node.childNodes.length - 1; i >= 0; i--) {
                    nodeStack.push(node.childNodes[i] as HTMLElement);
                }
            }
        }
    }
}

export default Cursor;
