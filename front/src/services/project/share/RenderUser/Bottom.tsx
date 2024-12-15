import { SharedUserType } from "services/project/type";

interface BottomProps {
    user: SharedUserType;
}

const Bottom = ({ user }: BottomProps) => {
    return (
        <h1 className="text-sm text-neutral italic line-clamp-1 w-full">
            {user.user_mail}
        </h1>
    );
};

export default Bottom;
