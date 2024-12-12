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
    const cssEditing = clsx({
        "text-md": type === "description",
        "text-2xl font-bold": type === "title",
    });

    const cssNotEditing = clsx("break-all", {
        "text-lg": type === "description",
        "text-3xl font-bold": type === "title",
    });

    return (
        <div className="w-fit">
            <EditableField
                defaultValue={value}
                onUpdate={onUpdate}
                className={{ edit: cssEditing, normal: cssNotEditing }}
                title={{ text: title ?? "Error" }}
            />
        </div>
    );
};

export default Field;
