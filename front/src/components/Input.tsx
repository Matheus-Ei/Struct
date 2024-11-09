import { ChangeEvent } from "react";

interface InputProps {
    text?: string;
    setValue?: (arg0: any) => any;
    isPassword?: boolean;
    type?: "textarea" | "input";
    className?: string;
}

type EventType = ChangeEvent<HTMLTextAreaElement | HTMLInputElement>;

const Input = ({ text, setValue, isPassword, type, className }: InputProps) => {
    const handleChange = (event: EventType) => {
        setValue && setValue(event.target.value);
    };

    if (type === "textarea") {
        return (
            <textarea
                className={
                    className
                        ? className
                        : "border rounded-btn h-14 w-[95%] pl-4 border-base-content mb-3 bg-base-100 text-base-content pt-4 resize-none"
                }
                placeholder={text}
                onChange={handleChange}
            ></textarea>
        );
    }

    return (
        <input
            className={
                className
                    ? className
                    : "border rounded-btn h-14 w-[95%] pl-4 border-base-content mb-3 bg-base-100 text-base-content"
            }
            placeholder={text}
            onChange={handleChange}
            type={!isPassword ? "text" : "password"}
        ></input>
    );
};

export default Input;
