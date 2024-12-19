// Local
import RenderUser from "services/project/share/RenderUser";
import { SharedUserType } from "services/project/type";

interface UsersGridProps {
    users: SharedUserType[];
    refetch: () => void;
}

const UsersGrid = ({ users, refetch }: UsersGridProps) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 items-center justify-items-start w-full mt-2 ml-4">
            {users.map((item: SharedUserType, index: number) => (
                <RenderUser user={item} refetch={refetch} key={index} />
            ))}
        </div>
    );
};

export default UsersGrid;
