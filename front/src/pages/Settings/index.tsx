// Library
import { useNavigate } from "react-router-dom";

// Local
import ThemeController from "./ThemeController";
import SettingsHeader from "./SettingsHeader";
import withLoader from "HOCs/withLoader";
import Point from "components/Point";

const Settings = () => {
    const navigate = useNavigate();

    return (
        <div className="relative flex justify-center h-screen w-screen pt-20">
            <Point
                icon={{ name: "IoIosArrowBack", library: "io" }}
                text="Go back"
                onClick={() => navigate("/dashboard")}
                className="absolute left-20 top-20"
            />

            <div className="flex flex-col items-center h-full w-2/3 gap-y-4">
                <SettingsHeader />

                <ThemeController />
            </div>
        </div>
    );
};

export default withLoader(Settings, true);
