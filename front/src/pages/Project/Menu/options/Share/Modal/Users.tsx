// Local
import RenderUser from "services/project/share/RenderUser";
import { SharedUserType } from "services/project/type";

interface UsersProps {
    users: SharedUserType[];
    refetch: () => void;
}

const Users = ({ users, refetch }: UsersProps) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 items-center justify-items-start w-full mt-2 ml-4">
            {users.map((item: SharedUserType, index: number) => (
                <RenderUser user={item} refetch={refetch} key={index} />
            ))}
        </div>
    );
};

export default Users;
