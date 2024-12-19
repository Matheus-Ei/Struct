// Local
import ThemeSelector from "modules/Theme/Selector";
import Header from "./Header";
import withLoader from "HOCs/withLoader";
import GoBackButton from "modules/Navigator/GoBackButton";

const Settings = () => {
    return (
        <div className="relative flex justify-center h-screen w-screen pt-20">
            <GoBackButton lastPage="/dashboard" />

            <div className="flex flex-col items-center h-full w-2/3 gap-y-4">
                <Header />

                <ThemeSelector />
            </div>
        </div>
    );
};

export default withLoader(Settings, true);
