// Libraries
import { useContext, useEffect, useMemo, useRef, useState } from "react";

// Local
import { handleKeyDown } from "../utils/Events";
import { NotesPageContext } from "../Body";
import Cursor from "../utils/Cursor";
import { Text } from "../utils/Text";

interface TitleProps {
    note: string;
    index: number;
    titleType: 1 | 2 | 3;
}

const Title = ({ note, index, titleType }: TitleProps) => {
    const [position, setPosition] = useState<number>(0);

    const divRef = useRef<HTMLDivElement | null>(null);
    const cursorObj = useMemo(() => new Cursor(divRef), [divRef]);

    useEffect(() => {
        cursorObj.setCursorPosition(position);
    }, [position, cursorObj]);

    const context = useContext(NotesPageContext);
    if (!context) return null;

    const textObj = new Text(context);

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
                    onKeyDown={(event) =>
                        handleKeyDown(event, index, textObj, context)
                    }
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
                    onKeyDown={(event) =>
                        handleKeyDown(event, index, textObj, context)
                    }
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
                    onKeyDown={(event) =>
                        handleKeyDown(event, index, textObj, context)
                    }
                    onInput={onChange}
                ></div>
            );
    }
};

export default Title;
