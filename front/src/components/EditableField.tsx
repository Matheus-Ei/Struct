// Libraries
import { KeyboardEvent, MouseEvent, useRef, useState } from "react";
import clsx from "clsx";

// Local
import Cursor from "modules/Cursor";
import Event from "modules/Event";
import Icon from "./Icon";

interface EditableFieldProps {
    defaultValue: string | undefined;
    onUpdate: (value: string) => Promise<void>;
    classNameEditing?: string;
    classNameNotEditing?: string;
    title?: {
        isVisible: boolean;
        text: string;
        iconPosition?: "left" | "right";
    };
}

const EditableField = ({
    defaultValue,
    onUpdate,
    classNameEditing,
    classNameNotEditing,
    title,
}: EditableFieldProps) => {
    const [isEditing, setIsEditing] = useState<boolean>(false);
    const [preValue, setPreValue] = useState<string>("");
    const divRef = useRef<HTMLDivElement>(null);

    const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
        const keyEvent = new Event(event);

        const onPressEnter = async () => {
            keyEvent.preventDefault();
            setIsEditing(false);

            // Remove all new lines
            const newText = keyEvent.targetInnerText.replace(/\n/g, "");

            // Verifications
            if (newText === preValue) return;
            if (!newText) {
                keyEvent.targetInnerText = preValue;
                return;
            }

            // Update the value
            setPreValue(newText);
            try {
                await onUpdate(newText);
            } catch (error) {
                keyEvent.targetInnerText = preValue;
            }
        };

        Event.onKeyDown(event, [
            { key: "Enter", callback: onPressEnter },
            {
                key: "Escape",
                callback: () => {
                    setIsEditing(false);
                    keyEvent.targetInnerText = preValue;
                },
            },
        ]);
    };

    const handleClick = (event: MouseEvent<HTMLDivElement>) => {
        setIsEditing(true);
        const content = event.target as HTMLDivElement;
        setPreValue(content.innerText);

        // Focus the cursor, and move it to the end
        setTimeout(() => {
            if (isEditing) return;

            const cursor = new Cursor(divRef.current);

            cursor.focus();
            cursor.move("end");
        }, 0);
    };

    const handleBlur = (event: FocusEvent) => {
        const content = event.target as HTMLDivElement;
        content.innerText = preValue;
        setIsEditing(false);
    };

    const defaultCss = clsx("w-fit h-fit text-base-content outline-none", {
        "bg-base-200 rounded-btn p-1": isEditing,
        "bg-base-100 cursor-pointer select-none": !isEditing,
    });

    const css = clsx({
        [classNameEditing as string]: isEditing,
        [classNameNotEditing as string]: !isEditing,
    });

    const innerHTML = { __html: defaultValue ? defaultValue : "" };

    return (
        <div>
            {title && title.isVisible && (
                <div className="flex items-center gap-x-2">
                    {title.iconPosition === "right" && (
                        <Icon name="MdEdit" library="md" />
                    )}

                    <h1 className="font-bold italic select-none">
                        {title.text}
                    </h1>

                    {title.iconPosition !== "right" && (
                        <Icon name="MdEdit" library="md" />
                    )}
                </div>
            )}

            <div
                contentEditable={isEditing}
                dangerouslySetInnerHTML={innerHTML}
                ref={divRef}
                onClick={handleClick}
                onBlur={handleBlur}
                onKeyDown={handleKeyDown}
                className={css ? css : defaultCss}
            />
        </div>
    );
};

export default EditableField;
