// Libraries
import clsx from "clsx";
import { ChangeEvent, Dispatch, KeyboardEvent, SetStateAction } from "react";
import { ErrorType } from "types/global";

interface InputProps {
    text?: string;
    setValue?: Dispatch<SetStateAction<string>>;
    isPassword?: boolean;
    type?: "textarea" | "input";
    className?: string;
    onEnter?: () => void;
    maxLength?: number;
    defaultValue?: string | null;
    error?: ErrorType;
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
    error,
}: InputProps) => {
    const handleChange = (event: EventType) =>
        setValue && setValue(event.target.value);

    const onKeyDown = (e: KeyboardEvent) =>
        onEnter && e.key === "Enter" && onEnter();

    const defaultCss = clsx(
        "w-[95%] h-14 pl-4 mb-3",
        "bg-base-100 text-base-content",
        "border outline-none rounded-btn",
        {
            "border-error": error?.isError,
            "border-neutral": !error?.isError,
            "resize-none pt-4": type === "textarea",
        }
    );
    const css = className ? className : defaultCss;

    if (type === "textarea") {
        return (
            <>
                {error?.isError && (
                    <p className="text-error text-sm w-full px-8">
                        {error.message}
                    </p>
                )}

                <textarea
                    className={css}
                    placeholder={text}
                    onChange={handleChange}
                    onKeyDown={onKeyDown}
                    defaultValue={defaultValue ? defaultValue : ""}
                ></textarea>
            </>
        );
    }

    return (
        <>
            {error?.isError && (
                <p className="text-error text-sm w-full px-4">
                    {error.message}
                </p>
            )}

            <input
                className={css}
                placeholder={text}
                onChange={handleChange}
                type={!isPassword ? "text" : "password"}
                defaultValue={defaultValue ? defaultValue : ""}
                onKeyDown={onKeyDown}
                maxLength={maxLength}
            ></input>
        </>
    );
};

export default Input;
