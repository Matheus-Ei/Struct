// Library
import clsx from "clsx";

// Local
import Message404 from "components/Message404";
import RenderUser from "services/project/share/RenderUser";
import { SharedUserType } from "services/project/type";

const css = clsx(
    "grid items-start content-start",
    "overflow-y-scroll overflow-x-hidden",
    "w-[95%] h-4/5 mt-4",
    "gap-x-6 gap-y-4",
    "grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7"
);

interface UsersGridProps {
    users: SharedUserType[] | null | undefined;
    refetch: () => void;
}

const UsersGrid = ({ users, refetch }: UsersGridProps) => {
    if (!users) return <Message404 text="No users found" />;

    return (
        <div className={css}>
            {users?.map((item: SharedUserType) => (
                <RenderUser user={item} refetch={refetch} key={item.user_id} />
            ))}
        </div>
    );
};

export default UsersGrid;
