// Local
import BasicInfo from "./BasicInfo";
import SideBar from "./SideBar";
import GoBackButton from "components/GoBackButton";

const Profile = () => {
    return (
        <div className="relative w-screen h-screen flex flex-col items-center pt-20">
            <GoBackButton />

            <div className="flex justify-center w-2/4 h-full">
                <BasicInfo />

                <SideBar />
            </div>
        </div>
    );
};

export default Profile;
