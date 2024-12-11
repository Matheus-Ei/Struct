import EditableField from "components/EditableField";

interface FirstRowProps {
    user: {
        name: string;
        nickname: string;
    };
    update: (value: string, field: "name" | "about") => Promise<void>;
}

const FirstRow = ({ user, update }: FirstRowProps) => {
    return (
        <div className="flex items-center w-full h-40 gap-x-4">
            <img
                src="https://via.placeholder.com/500"
                className="h-full rounded-full"
                alt="profile"
            />

            <div className="flex flex-col gap-y-1">
                <EditableField
                    defaultValue={user?.name}
                    onUpdate={(value) => update(value, "name")}
                    title={{ text: "Name" }}
                    classNameEditing="text-3xl font-bold"
                    classNameNotEditing="text-4xl font-bold"
                />

                <p className="text-neutral italic">@{user?.nickname}</p>
            </div>
        </div>
    );
};

export default FirstRow;
