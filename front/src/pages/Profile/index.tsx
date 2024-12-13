// Local
import withLoader from "HOCs/withLoader";
import { useUser } from "services/user/useUser";
import BasicInfo from "./BasicInfo";
import SideBar from "./SideBar";
import GoBackButton from "modules/Navigator/GoBackButton";

const Profile = () => {
    const { data: user } = useUser();

    return (
        <div className="relative w-screen h-screen flex flex-col items-center pt-20">
            <GoBackButton lastPage="/dashboard" />

            <div className="flex justify-center w-2/4 h-full">
                <BasicInfo user={user} />

                <SideBar user={user} />
            </div>
        </div>
    );
};

export default withLoader(Profile);
