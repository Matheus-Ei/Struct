// Local
import { useProjectShare } from "services/project/share/useShare";
import { TabProps } from "../../utils/types";
import AddUser from "services/project/share/Add";
import UsersGrid from "./UsersGrid";

const Shared = ({ projectId }: TabProps) => {
    const { data: users, refetch } = useProjectShare(String(projectId));

    return (
        <div className="w-full h-5/6 flex justify-center">
            <UsersGrid users={users} refetch={refetch} />

            <div className="absolute bottom-2 right-2">
                <AddUser projectId={String(projectId)} refetch={refetch} />
            </div>
        </div>
    );
};

export default Shared;
