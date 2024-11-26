// Libraries
import { KeyboardEvent, useContext, useEffect, useMemo, useRef, useState } from "react";

// Local
import { handleKeyDown } from "../utils/Events";
import { NotesPageContext } from "../Body";
import { Text } from "../utils/Text";
import Cursor from "modules/Cursor";

interface TitleProps {
    note: string;
    index: number;
    titleType: 1 | 2 | 3;
}

const Title = ({ note, index, titleType }: TitleProps) => {
    const [position, setPosition] = useState<number>(0);
    const divRef = useRef<HTMLDivElement | null>(null);

    const cursor = useMemo(() => new Cursor(divRef.current), [divRef]);

    useEffect(() => {
        cursor.position = position;
    }, [position, cursor]);

    const context = useContext(NotesPageContext);
    if (!context) return null;
    const textEditor = new Text(context);

    const onChange = () => {
        setPosition(cursor.position);
        if (divRef.current)
            textEditor.handleSetText(index, divRef.current.innerHTML);
    };

    const keyDownHandler = (event: KeyboardEvent<HTMLDivElement>) =>
        handleKeyDown(event, index, textEditor);

    const innerHTML = { __html: note };

    switch (titleType) {
        case 1:
            return (
                <div
                    contentEditable
                    dangerouslySetInnerHTML={innerHTML}
                    ref={divRef}
                    className="w-full h-auto bg-base-100 resize-none outline-none font-bold text-4xl"
                    onKeyDown={keyDownHandler}
                    onInput={onChange}
                ></div>
            );

        case 2:
            return (
                <div
                    contentEditable
                    dangerouslySetInnerHTML={innerHTML}
                    ref={divRef}
                    className="w-full h-auto bg-base-100 resize-none outline-none font-bold text-2xl"
                    onKeyDown={keyDownHandler}
                    onInput={onChange}
                ></div>
            );

        case 3:
            return (
                <div
                    contentEditable
                    dangerouslySetInnerHTML={innerHTML}
                    ref={divRef}
                    className="w-full h-auto bg-base-100 resize-none outline-none font-bold text-xl"
                    onKeyDown={keyDownHandler}
                    onInput={onChange}
                ></div>
            );
    }
};

export default Title;
