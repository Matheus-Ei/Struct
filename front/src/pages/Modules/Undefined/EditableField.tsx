import useToggle from "hooks/useToggle";
import { useRef } from "react";
import Request from "services/Request";

interface EditableFieldProps {
    defaultValue: string | undefined;
    pageId: number;
    type: "description" | "name";
    className?: string;
}

const EditableField = ({
    defaultValue,
    className,
    pageId,
    type,
}: EditableFieldProps) => {
    const [isEditable, toggleIsEditable] = useToggle(false);
    const divRef = useRef<HTMLDivElement>(null);

    const editionUrl =
        type === "name"
            ? `page/geral/edit/name/${pageId}`
            : `page/geral/edit/description/${pageId}`;

    const pressEnter = (event: any) => {
        if (event.key === "Enter") {
            event.preventDefault();

            const data: any = {};
            data[type] = divRef.current?.innerText;

            console.log(data);
            Request.patch(editionUrl, data).then(() => {
                toggleIsEditable(false);
            });
        }
    };

    const onClick = () => {
        toggleIsEditable(true);
    };

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
