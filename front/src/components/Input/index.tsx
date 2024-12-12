// Libraries
import { twMerge } from "tailwind-merge";
import clsx from "clsx";

// Local
import { ErrorType, SetStateType } from "types/global";
import Error from "./Error";
import InputType from "./InputType";
import TextAreaType from "./TextAreaType";

interface InputProps {
    text?: string;
    setValue?: SetStateType<string>;
    isPassword?: boolean;
    type?: "textarea" | "input";
    onEnter?: () => void;
    length?: { max?: number; min?: number };
    defaultValue?: string;
    className?: string;
    error?: ErrorType;
}

const Input = ({
    text,
    setValue,
    isPassword,
    type,
    className,
    onEnter,
    length = { max: 100, min: 0 },
    defaultValue = "",
    error,
}: InputProps) => {
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
                <Error error={error} />

                <TextAreaType
                    text={text}
                    setValue={setValue}
                    defaultValue={defaultValue}
                    length={length}
                    css={css}
                    onEnter={onEnter}
                />
            </>
        );
    }

    return (
        <>
            <Error error={error} />

            <InputType
                text={text}
                setValue={setValue}
                defaultValue={defaultValue}
                length={length}
                css={css}
                isPassword={isPassword}
                onEnter={onEnter}
            />
        </>
    );
};

export default Input;
