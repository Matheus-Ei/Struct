// Local
import EditableField from "components/EditableField";
import Page from "services/page";

interface NameInputProps {
    name: string;
    pageId: number;
}

const NameInput = ({ pageId, name }: NameInputProps) => {
    const updateName = async (value: string) => {
        if (!value) return;

        await Page.edit(pageId, value, undefined, undefined);
    };

    return (
        <EditableField
            defaultValue={name}
            onUpdate={updateName}
            className={{ normal: "w-full px-1 line-clamp-1 select-none" }}
        />
    );
};

export default NameInput;
