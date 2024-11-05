import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { handleKeyDown } from "../utils/Events";
import { Text } from "../utils/Text";
import Cursor from "../utils/Cursor";

interface NotesTextType {
    note: string;
    type: string;
}

interface TitleProps {
    note: string;
    index: number;
    setNotes: Dispatch<SetStateAction<Array<NotesTextType>>>;
    titleType: 1 | 2 | 3;
}

const Title = ({ note, index, setNotes, titleType }: TitleProps) => {
    const [position, setPosition] = useState<number>(0);

    const divRef = useRef<HTMLDivElement | null>(null);
    const textObj = new Text(setNotes);
    const cursorObj = new Cursor(divRef);

    useEffect(() => {
        cursorObj.setCursorPosition(position);
    }, [position]);

    const onChange = () => {
        setPosition(cursorObj.getCursorPosition());
        if (divRef.current) {
            textObj.handleSetText(index, divRef.current.innerHTML);
        }
    };

    switch (titleType) {
        case 1:
            return (
                <div
                    contentEditable
                    dangerouslySetInnerHTML={{
                        __html: note,
                    }}
                    ref={divRef}
                    className="w-full h-auto bg-base-100 resize-none outline-none font-bold text-4xl"
                    onKeyDown={(event) => handleKeyDown(event, index, textObj)}
                    onInput={onChange}
                ></div>
            );

        case 2:
            return (
                <div
                    contentEditable
                    dangerouslySetInnerHTML={{
                        __html: note,
                    }}
                    ref={divRef}
                    className="w-full h-auto bg-base-100 resize-none outline-none font-bold text-2xl"
                    onKeyDown={(event) => handleKeyDown(event, index, textObj)}
                    onInput={onChange}
                ></div>
            );

        case 3:
            return (
                <div
                    contentEditable
                    dangerouslySetInnerHTML={{
                        __html: note,
                    }}
                    ref={divRef}
                    className="w-full h-auto bg-base-100 resize-none outline-none font-bold text-xl"
                    onKeyDown={(event) => handleKeyDown(event, index, textObj)}
                    onInput={onChange}
                ></div>
            );
    }
};

export default Title;
