import clsx from "clsx";
import Icons from "modules/Icons";
import { useProjectUsers } from "services/project/useProject";
import { TabProps } from "../../utils/types";
import Share from "./Share";

const usersDivCss = clsx(
    "grid items-start content-start",
    "overflow-y-scroll overflow-x-hidden",
    "w-[95%] h-4/5 mt-4",
    "gap-x-6 gap-y-4",
    "grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7"
);

const renderUsers = (item: any, index: number) => {
    return (
        <div
            key={index}
            className="flex flex-col items-center justify-center gap-y-2 w-full"
        >
            <div className="flex items-center justify-between w-full">
                <div className="flex items-center justify-start gap-x-3">
                    <Icons name="FaUserAlt" library="fa" className="text-2xl" />

                    <h1 className="text-lg">{item.user_nickname}</h1>
                </div>

                {/*<Icons name="IoIosMore" library="io" />*/}
            </div>

            <h1 className="text-sm text-neutral italic line-clamp-1 w-full">
                {item.user_mail}
            </h1>
        </div>
    );
};

const Shared = ({ projectId }: TabProps) => {
    const { data: users, refetch } = useProjectUsers(projectId);

    const getUsers = () => {
        if (users?.length === 0) {
            return (
                <div className="flex items-center justify-start w-full h-fit gap-x-6 ml-10 mt-4">
                    <Icons
                        name="TbError404"
                        library="tb"
                        className="text-4xl w-fit"
                    />

                    <h1 className="text-xl w-fit">No users found</h1>
                </div>
            );
        } else {
            return <div className={usersDivCss}>{users?.map(renderUsers)}</div>;
        }
    };

    return (
        <div className="w-full h-5/6 flex justify-center">
            {getUsers()}
            <Share projectId={projectId} refetch={refetch} />
        </div>
    );
};

export default Shared;
