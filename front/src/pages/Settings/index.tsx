// Components
import ThemeController from "./ThemeController";

// HOCs
import withLoader from "HOCs/withLoader";
import SettingsHeader from "./SettingsHeader";

const Settings = () => {
    return (
        <div className="flex flex-col items-center justify-center h-[90vh] w-full">
            <SettingsHeader />
            <ThemeController />
        </div>
    );
};

export default withLoader(Settings, true);
