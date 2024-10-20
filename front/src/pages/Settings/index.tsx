// Components
import ThemeController from "./ThemeController";

// HOCs
import withLoader from "HOCs/withLoader";

const Settings = () => {
    return (
        <div className="flex flex-col items-center justify-center h-[90vh] w-full">
            <h1 className="font-bold text-lg mb-12">Settings</h1>
            <ThemeController />
        </div>
    );
};

export default withLoader(Settings);
