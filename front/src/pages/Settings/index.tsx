import ThemeController from "./ThemeController";
import withLoader from "HOCs/withLoader";
import SettingsHeader from "./SettingsHeader";
import Logout from "./Logout";

const Settings = () => {
    return (
        <div className="flex flex-col items-center justify-center h-[90vh] w-full gap-4">
            <SettingsHeader />
            <ThemeController />
            <Logout />
        </div>
    );
};

export default withLoader(Settings, true);
