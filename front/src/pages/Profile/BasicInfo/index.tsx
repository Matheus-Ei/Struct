// Local
import EditableField from "components/EditableField";
import User from "services/user";
import { UserType } from "services/user/type";
import Header from "./Header";

interface BasicInfoProps {
    user: UserType;
}

const BasicInfo = ({ user }: BasicInfoProps) => {
    const update = async (value: string, field: "name" | "about") => {
        const name = field === "name" ? value : undefined;
        const about = field === "about" ? value : undefined;

        await User.update(name, about, undefined);
    };

    return (
        <div className="flex flex-col w-5/6 gap-y-4">
            <Header user={user} update={update} />

            <EditableField
                defaultValue={user?.about ?? "Description was not provided..."}
                onUpdate={(value) => update(value, "about")}
                title={{ text: "About me" }}
            />
        </div>
    );
};

export default BasicInfo;
