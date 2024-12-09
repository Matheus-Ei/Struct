// Local
import EditableField from "components/EditableField";
import { UserType } from "services/user/type";

interface BasicInfoProps {
    user: UserType;
}

const BasicInfo = ({ user }: BasicInfoProps) => {
    return (
        <div className="flex flex-col w-5/6 gap-y-4">
            <div className="flex items-center w-full h-40 gap-x-4">
                <img
                    src="https://via.placeholder.com/500"
                    className="h-full rounded-full"
                    alt="profile"
                />

                <div className="flex flex-col gap-y-1">
                    <EditableField
                        defaultValue={user?.name}
                        onUpdate={async () => {}}
                        title={{ text: "Name" }}
                    />

                    <p className="text-primary italic">@{user?.nickname}</p>
                </div>
            </div>

            <EditableField
                defaultValue={user?.about ?? "Description was not provided..."}
                onUpdate={async () => {}}
                title={{ text: "About me" }}
            />
        </div>
    );
};

export default BasicInfo;
