import { ChangeEvent } from "react";

interface InputProps {
    text?: string;
    setValue?: (arg0: any) => any;
    isPassword?: boolean;
    type?: "textarea" | "input";
    className?: string;
    onEnter?: () => void;
}

type EventType = ChangeEvent<HTMLTextAreaElement | HTMLInputElement>;

const Input = ({
    text,
    setValue,
    isPassword,
    type,
    className,
    onEnter,
}: InputProps) => {
    const handleChange = (event: EventType) => {
        setValue && setValue(event.target.value);
    };

    if (type === "textarea") {
        return (
            <textarea
                className={
                    className
                        ? className
                        : "border rounded-btn h-14 w-[95%] pl-4 border-neutral mb-3 bg-base-100 text-base-content pt-4 resize-none"
                }
                placeholder={text}
                onChange={handleChange}
                onKeyDown={(e) => {
                    onEnter && e.key === "Enter" && onEnter();
                }}
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
            onKeyDown={(e) => {
                onEnter && e.key === "Enter" && onEnter();
            }}
        ></input>
    );
};

export default Input;
