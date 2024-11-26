// Libraries
import { useNavigate } from "react-router-dom";

// Local
import Icons from "modules/Icons";

const goDashboard = (navigator: (arg0: string) => void) =>
    navigator("/dashboard");

const SettingsHeader = () => {
    const navigator = useNavigate();

    return (
        <>
            <button
                className="flex flex-row items-center justify-center gap-4 absolute left-20 top-20"
                onClick={() => goDashboard(navigator)}
            >
                <Icons name="IoIosArrowBack" library="io" />
                <p>Go back</p>
            </button>

            <div className="flex flex-row items-center justify-center w-full h-[10vh]">
                <h1 className="font-bold text-lg">Settings</h1>
            </div>
        </>
    );
};

export default SettingsHeader;
