// Libraries
import { ChangeEvent, KeyboardEvent } from "react";

interface InputProps {
    text?: string;
    setValue?: (arg0: any) => any;
    isPassword?: boolean;
    type?: "textarea" | "input";
    className?: string;
    onEnter?: () => void;
    maxLength?: number;
    defaultValue?: string | null;
}

type EventType = ChangeEvent<HTMLTextAreaElement | HTMLInputElement>;

const Input = ({
    text,
    setValue,
    isPassword,
    type,
    className,
    onEnter,
    maxLength,
    defaultValue,
}: InputProps) => {
    const handleChange = (event: EventType) => {
        setValue && setValue(event.target.value);
    };

    const onKeyDown = (e: KeyboardEvent) => {
        onEnter && e.key === "Enter" && onEnter();
    };

    if (type === "textarea") {
        return (
            <textarea
                className={
                    className
                        ? className
                        : "border rounded-btn outline-none h-14 w-[95%] pl-4 border-neutral mb-3 bg-base-100 text-base-content pt-4 resize-none"
                }
                placeholder={text}
                onChange={handleChange}
                onKeyDown={(e) => {
                    onEnter && e.key === "Enter" && onEnter();
                }}
                defaultValue={defaultValue ? defaultValue : ""}
            ></textarea>
        );
    }

    return (
        <input
            className={
                className
                    ? className
                    : "border outline-none border-neutral rounded-btn h-14 w-[95%] pl-4 mb-3 bg-base-100 text-base-content"
            }
            placeholder={text}
            onChange={handleChange}
            type={!isPassword ? "text" : "password"}
            defaultValue={defaultValue ? defaultValue : ""}
            onKeyDown={onKeyDown}
            maxLength={maxLength}
        ></input>
    );
};

export default Input;
