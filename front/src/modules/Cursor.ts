class Cursor {
  private element: HTMLElement | null;

  constructor(element: HTMLElement | null) {
    this.element = element;
  }

  get position() {
    const selection = window.getSelection();

    if (!selection || !this.element) return 0;
    if (selection.rangeCount <= 0) return 0;

    const range = selection.getRangeAt(0);
    const preRange = range.cloneRange();
    preRange.selectNodeContents(this.element);
    preRange.setEnd(range.endContainer, range.endOffset);
    return preRange.toString().length;
  }

  set position(location: number) {
    const selection = window.getSelection();
    if (!selection || !this.element) return;

    const nodeStack = [this.element];
    let node;
    let charCount = 0;
    let found = false;

    while (nodeStack.length > 0 && !found) {
      node = nodeStack.pop();
      if (!node) continue;

      if (node.nodeType === 3) {
        const textLength = node.textContent?.length || 0;
        if (charCount + textLength >= location) {
          const range = document.createRange();
          range.setStart(node, location - charCount);
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

  move(direction: 'end' | 'start') {
    if (!this.element) return null;

    const range = document.createRange();
    const selection = window.getSelection();
    if (!selection || !range) return;

    range.selectNodeContents(this.element);
    range.collapse(direction === 'start');
    selection.removeAllRanges();
    selection.addRange(range);
  }

  focus() {
    if (!this.element) return null;

    this.element.focus();
  }
}

export default Cursor;
