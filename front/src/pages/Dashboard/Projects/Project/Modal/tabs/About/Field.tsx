// Libraries
import clsx from "clsx";

// Local
import EditableField from "components/EditableField";

interface FieldProps {
    title: string | undefined;
    value: string | undefined;
    type: "title" | "description";
    onUpdate: (newValue: string) => Promise<void>;
}

const Field = ({ title, value, type, onUpdate }: FieldProps) => {
    const cssEditing = clsx(
        "py-1 px-2 w-fit w-max-full",
        "bg-base-200",
        "rounded-btn outline-none break-all",
        "cursor-text select-none",
        {
            "text-md": type === "description",
            "text-2xl font-bold": type === "title",
        }
    );

    const cssNotEditing = clsx(
        "w-fit w-max-full",
        "outline-none break-all",
        "cursor-pointer select-none",
        {
            "text-lg": type === "description",
            "text-3xl font-bold": type === "title",
        }
    );

    return (
        <div className="w-fit">
            <EditableField
                defaultValue={value}
                onUpdate={onUpdate}
                classNameEditing={cssEditing}
                classNameNotEditing={cssNotEditing}
                title={{ isVisible: true, text: title ?? "Error" }}
            />
        </div>
    );
};

export default Field;
