// LIbraries
import { useRef } from "react";

// Local
import useToggle from "hooks/useToggle";
import Request from "services/Request";

interface EditableFieldProps {
    defaultValue: string | undefined;
    pageId?: number;
    field: "description" | "name";
    className?: string;
}

const EditableField = ({
    defaultValue,
    className,
    pageId,
    field,
}: EditableFieldProps) => {
    const [isEditable, toggleIsEditable] = useToggle(false);
    const divRef = useRef<HTMLDivElement>(null);

    const pressEnter = (event: any) => {
        if (event.key === "Enter") {
            event.preventDefault();

            const data: any = {};
            data[field] = divRef.current?.innerText;

            Request.patch(`page/geral/edit/${pageId}`, data).then(() => {
                toggleIsEditable(false);
            });
        }
    };

    const onClick = () => toggleIsEditable(true);

    return (
        <div
            ref={divRef}
            contentEditable={isEditable}
            dangerouslySetInnerHTML={{
                __html: defaultValue ? defaultValue : "",
            }}
            onClick={onClick}
            onKeyDown={pressEnter}
            className={className}
        ></div>
    );
};

export default EditableField;
