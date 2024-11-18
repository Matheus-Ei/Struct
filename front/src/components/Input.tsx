// Libraries
import { ChangeEvent, KeyboardEvent } from "react";
import { ErrorType } from "types/global";

interface InputProps {
    text?: string;
    setValue?: (arg0: any) => any;
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
    const handleChange = (event: EventType) => {
        setValue && setValue(event.target.value);
    };

    const onKeyDown = (e: KeyboardEvent) => {
        onEnter && e.key === "Enter" && onEnter();
    };

    const errorStyle = error?.isError ? "border-error" : "border-neutral";
    if (type === "textarea") {
        return (
            <>
                {error?.isError && (
                    <p className="text-error text-sm w-full px-8">
                        {error.message}
                    </p>
                )}

                <textarea
                    className={
                        className
                            ? className
                            : "border rounded-btn outline-none h-14 w-[95%] pl-4 mb-3 bg-base-100 text-base-content pt-4 resize-none " +
                              errorStyle
                    }
                    placeholder={text}
                    onChange={handleChange}
                    onKeyDown={(e) => {
                        onEnter && e.key === "Enter" && onEnter();
                    }}
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
                className={
                    className
                        ? className
                        : "border outline-none rounded-btn h-14 w-[95%] pl-4 mb-3 bg-base-100 text-base-content " +
                          errorStyle
                }
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
