// Local
import Logout from "services/user/Logout";
import { UserType } from "services/user/type";
import ChangeInfo from "./ChangeInfo";

interface SideBarProps {
    user: UserType;
}

const SideBar = ({ user }: SideBarProps) => {
    return (
        <div className="flex flex-col items-start w-1/6 h-full gap-y-4 mt-10">
            <ChangeInfo
                text="Change password"
                icon={{ name: "IoIosLock", library: "io" }}
                onClick={() => {}}
            />

            <ChangeInfo
                text="Change email"
                icon={{ name: "IoIosMail", library: "io" }}
                onClick={() => {}}
            />

            <Logout />
        </div>
    );
};

export default SideBar;
