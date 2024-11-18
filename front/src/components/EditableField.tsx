import { useState } from "react";

interface EditableFieldProps {
    defaultValue: string | undefined;
    onUpdate: (value: string) => Promise<void>;
    classNameEditing?: string;
    classNameNotEditing?: string;
}

const EditableField = ({
    defaultValue,
    onUpdate,
    classNameEditing,
    classNameNotEditing,
}: EditableFieldProps) => {
    const [isEditing, setIsEditing] = useState<boolean>(false);
    const [preValue, setPreValue] = useState<string>("");

    const onKeyDown = async (event: any) => {
        if (event.key === "Enter") {
            event.preventDefault();
            setIsEditing(false);

            const newText = event.target.innerText.replace(/\n/g, "");

            if (newText === preValue) return;
            if (newText === "") {
                event.target.innerText = preValue;
                return;
            }

            setPreValue(newText);

            try {
                await onUpdate(newText);
            } catch (error) {
                event.target.innerText = preValue;
            }
        }

        if (event.key === "Escape") {
            event.preventDefault();
            setIsEditing(false);
            event.target.innerText = preValue;
        }
    };

    const onClick = (event: any) => {
        setIsEditing(true);
        setPreValue(event.target.innerText);
    };

    const onBlur = (event: any) => {
        setIsEditing(false);
        event.target.innerText = preValue;
    };

    const styleNotEditing =
        "cursor-pointer select-none w-fit h-fit text-xl outline-none";
    const styleEditing =
        "cursor-text select-none w-fit h-fit text-xl outline-none border border-primary rounded-btn p-1";

    const defaultStyle = isEditing ? styleEditing : styleNotEditing;
    const className = isEditing ? classNameEditing : classNameNotEditing;

    return (
        <div
            contentEditable={isEditing}
            dangerouslySetInnerHTML={{
                __html: defaultValue ? defaultValue : "",
            }}
            onClick={onClick}
            onBlur={onBlur}
            onKeyDown={onKeyDown}
            className={className ? className : defaultStyle}
        ></div>
    );
};

export default EditableField;
