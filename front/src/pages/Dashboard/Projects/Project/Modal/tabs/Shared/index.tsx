// Library
import clsx from "clsx";

// Local
import { useProjectShare } from "services/project/share/useShare";
import { TabProps } from "../../utils/types";
import RenderUser from "services/project/share/RenderUser";
import AddUser from "services/project/share/Add";
import { SharedUserType } from "services/project/type";
import Message404 from "components/Message404";

const usersDivCss = clsx(
    "grid items-start content-start",
    "overflow-y-scroll overflow-x-hidden",
    "w-[95%] h-4/5 mt-4",
    "gap-x-6 gap-y-4",
    "grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7"
);

const Shared = ({ projectId }: TabProps) => {
    const { data: users, refetch } = useProjectShare(String(projectId));

    const getUsers = () => {
        if (!users) {
            return <Message404 text="No users found" />;
        } else {
            return (
                <div className={usersDivCss}>
                    {users?.map((item: SharedUserType, index: number) => (
                        <RenderUser user={item} refetch={refetch} key={index} />
                    ))}
                </div>
            );
        }
    };

    return (
        <div className="w-full h-5/6 flex justify-center">
            {getUsers()}
            <div className="absolute bottom-2 right-2">
                <AddUser projectId={String(projectId)} refetch={refetch} />
            </div>
        </div>
    );
};

export default Shared;
