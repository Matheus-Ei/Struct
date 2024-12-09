// Library
import { useNavigate } from "react-router-dom";

// Local
import ThemeController from "./ThemeController";
import SettingsHeader from "./SettingsHeader";
import withLoader from "HOCs/withLoader";
import Icon from "components/Icon";
import Logout from "services/user/Logout";

const Settings = () => {
    const navigate = useNavigate();

    return (
        <div className="relative flex justify-center h-screen w-screen pt-20">
            <button
                className="flex flex-row items-center justify-center gap-x-4 absolute left-20 top-20"
                onClick={() => navigate("/dashboard")}
            >
                <Icon name="IoIosArrowBack" library="io" />
                <p>Go back</p>
            </button>

            <div className="flex flex-col items-center h-full w-2/3 gap-y-4">
                <SettingsHeader />
                <ThemeController />
                <Logout />
            </div>
        </div>
    );
};

export default withLoader(Settings, true);
