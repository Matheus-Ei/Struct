// Libraries
import { useRef, useState } from "react";
import clsx from "clsx";

// Local
import Cursor from "modules/Cursor";
import Event from "modules/Event";

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
    const divRef = useRef<HTMLDivElement>(null);

    const onKeyDown = (event: any) => {
        const onKeyEvent = new Event(event);

        const onPressEnter = async () => {
            onKeyEvent.preventDefault();
            setIsEditing(false);

            // Remove all new lines
            const newText = onKeyEvent.targetInnerText.replace(/\n/g, "");

            // Verifications
            if (newText === preValue) return;
            if (!newText) {
                onKeyEvent.targetInnerText = preValue;
                return;
            }

            // Update the value
            setPreValue(newText);
            try {
                await onUpdate(newText);
            } catch (error) {
                onKeyEvent.targetInnerText = preValue;
            }
        };

        Event.onKeyDown(event, [
            { key: "Enter", callback: onPressEnter },
            {
                key: "Escape",
                callback: () => {
                    setIsEditing(false);
                    onKeyEvent.targetInnerText = preValue;
                },
            },
        ]);
    };

    const onClick = (event: any) => {
        setIsEditing(true);
        setPreValue(event.target.value);

        // Focus the cursor, and move it to the end
        setTimeout(() => {
            if (isEditing) return;

            const cursor = new Cursor(divRef.current);

            cursor.focus();
            cursor.move("end");
        }, 0);
    };

    const onBlur = (event: any) => {
        event.target.value = preValue;
        setIsEditing(false);
    };

    const defaultCss = clsx(
        "w-fit h-fit text-md text-base-content outline-none",
        {
            "bg-base-200 rounded-btn p-1": isEditing,
            "bg-base-100 cursor-pointer select-none": !isEditing,
        }
    );

    const css = clsx({
        [classNameEditing as string]: isEditing,
        [classNameNotEditing as string]: !isEditing,
    });

    const innerHTML = { __html: defaultValue ? defaultValue : "" };

    return (
        <div
            contentEditable={isEditing}
            dangerouslySetInnerHTML={innerHTML}
            ref={divRef}
            onClick={onClick}
            onBlur={onBlur}
            onKeyDown={onKeyDown}
            className={css ? css : defaultCss}
        ></div>
    );
};

export default EditableField;
