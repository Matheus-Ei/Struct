// Library
import { ChangeEvent, KeyboardEvent } from "react";

// Local
import { SetStateType } from "types/global";

interface InputTypeProps {
    text?: string;
    defaultValue?: string;
    length: {
        min: number;
        max: number;
    };
    css: string;
    isPassword?: boolean;
    setValue?: SetStateType<string>;
    onEnter?: () => void;
}

type EventType = ChangeEvent<HTMLTextAreaElement | HTMLInputElement>;

const InputType = ({
    text,
    defaultValue,
    length,
    css,
    isPassword,
    setValue,
    onEnter,
}: InputTypeProps) => {
    const handleChange = (event: EventType) =>
        setValue && setValue(event.target.value);

    const onKeyDown = (e: KeyboardEvent) =>
        onEnter && e.key === "Enter" && onEnter();

    return (
        <input
            className={css}
            placeholder={text}
            onChange={handleChange}
            type={!isPassword ? "text" : "password"}
            defaultValue={defaultValue}
            onKeyDown={onKeyDown}
            maxLength={length.max}
            minLength={length.min}
        ></input>
    );
};

export default InputType;
