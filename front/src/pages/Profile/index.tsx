// Library
import { useNavigate } from "react-router-dom";

// Local
import Point from "components/Point";
import withLoader from "HOCs/withLoader";
import { useUser } from "services/user/useUser";
import BasicInfo from "./BasicInfo";
import SideBar from "./SideBar";

const Profile = () => {
    const { data: user } = useUser();

    const navigate = useNavigate();

    return (
        <div className="relative w-screen h-screen flex flex-col items-center pt-20">
            <Point
                icon="IoIosArrowBack"
                library="io"
                text="Go back"
                onClick={() => navigate("/dashboard")}
                className="absolute left-20 top-20"
            />

            <div className="flex justify-center w-2/4 h-full">
                <BasicInfo user={user} />

                <SideBar user={user} />
            </div>
        </div>
    );
};

export default withLoader(Profile);
