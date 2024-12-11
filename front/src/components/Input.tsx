// Libraries
import { ErrorType, SetStateType } from "types/global";
import { ChangeEvent, KeyboardEvent } from "react";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";

interface InputProps {
    text?: string;
    setValue?: SetStateType<string>;
    isPassword?: boolean;
    type?: "textarea" | "input";
    className?: string;
    onEnter?: () => void;
    maxLength?: number;
    minLength?: number;
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
    minLength,
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
    const css = twMerge(defaultCss, className);

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
                    maxLength={maxLength}
                    minLength={minLength}
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
                minLength={minLength}
            ></input>
        </>
    );
};

export default Input;
