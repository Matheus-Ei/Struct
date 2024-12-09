// Local
import EditableField from "components/EditableField";
import Logout from "services/user/Logout";
import { UserType } from "services/user/type";

interface SideBarProps {
    user: UserType;
}

const SideBar = ({ user }: SideBarProps) => {
    return (
        <div className="flex flex-col items-start w-1/6 h-full gap-y-4 mt-10">
            <EditableField
                defaultValue={user?.mail}
                onUpdate={async () => {}}
                title={{ text: "Mail" }}
            />

            <Logout />
        </div>
    );
};

export default SideBar;
