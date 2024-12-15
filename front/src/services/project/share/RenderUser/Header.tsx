// Local
import Icon from "components/Icon";
import { SharedUserType } from "services/project/type";

interface HeaderProps {
    user: SharedUserType;
}

const Header = ({ user }: HeaderProps) => {
    return (
        <div className="flex items-center justify-start gap-x-3">
            <Icon
                value={{ name: "FaUserAlt", library: "fa" }}
                className="text-2xl"
            />

            <h1 className="text-lg">{user.user_nickname}</h1>
        </div>
    );
};

export default Header;
