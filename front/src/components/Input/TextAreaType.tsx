// Library
import { ChangeEvent, KeyboardEvent } from "react";

// Local
import { SetStateType } from "types/global";

interface TextAreaTypeProps {
    text?: string;
    defaultValue?: string;
    length: {
        min: number;
        max: number;
    };
    setValue?: SetStateType<string>;
    onEnter?: () => void;
    css: string;
}

type EventType = ChangeEvent<HTMLTextAreaElement | HTMLInputElement>;

const TextAreaType = ({
    text,
    defaultValue,
    length,
    setValue,
    onEnter,
    css,
}: TextAreaTypeProps) => {
    const handleChange = (event: EventType) =>
        setValue && setValue(event.target.value);

    const onKeyDown = (e: KeyboardEvent) =>
        onEnter && e.key === "Enter" && onEnter();

    return (
        <textarea
            className={css}
            placeholder={text}
            onChange={handleChange}
            onKeyDown={onKeyDown}
            defaultValue={defaultValue}
            maxLength={length.max}
            minLength={length.min}
        ></textarea>
    );
};

export default TextAreaType;
