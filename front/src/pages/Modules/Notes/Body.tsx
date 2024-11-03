import { useEffect, useRef, useState } from "react";
import { Text, TextCategory } from "./Text";

const getCursorPosition = (divRef: any) => {
    const selection = window.getSelection();
    if (selection && selection.rangeCount > 0) {
        const range = selection.getRangeAt(0);
        const preRange = range.cloneRange();
        preRange.selectNodeContents(divRef.current!);
        preRange.setEnd(range.endContainer, range.endOffset);
        return preRange.toString().length;
    }
    return 0;
};

const setCursorPosition = (divRef: any, pos: number) => {
    const selection = window.getSelection();
    if (!selection || !divRef.current) return;

    const nodeStack = [divRef.current];
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
                nodeStack.push(node.childNodes[i]);
            }
        }
    }
};

const Body = () => {
    const divRef = useRef<HTMLDivElement | null>(null);
    const [text, setText] = useState("");

    const textHandler = new Text();
    const textClassifierHandler = new TextCategory();

    useEffect(() => {
        if (divRef.current) {
            const cursorPosition = getCursorPosition(divRef);

            const typesArray = textClassifierHandler.set(text.split("\n"));
            const newHTML = textHandler.render(typesArray);

            divRef.current.innerHTML = newHTML;

            setCursorPosition(divRef, cursorPosition);
        }
    }, [text]);

    let typingTimer: any;
    const handleChange = (event: any) => {
        setText(event.target.innerText);

        typingTimer = setTimeout(() => {
            console.log("Usuário parou de editar, atualizar o banco de dados");
        }, 5000);
    };

    return (
        <div
            ref={divRef}
            contentEditable
            className="w-full h-fit outline-none"
            onInput={handleChange}
        />
    );
};

export default Body;
