// Components
import { ReactComponent as Logo } from "assets/logo-1800x400-1.svg";
import Icons from "services/Icons";

// Hooks
import { useNavigate } from "react-router-dom";

const HandleButtonClick = (navigate: any) => {
    navigate("/settings");
};

const Header = () => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-row w-screen h-32 items-center justify-between px-12">
            <div className="flex flex-row w-fit h-full items-center justify-start gap-12">
                <Logo className="text-primary w-64 h-full" />

                <div className="flex flex-row gap-6">
                    <h1 className="font-bold text-xl">Projects</h1>
                </div>
            </div>

            <div className="flex flex-row w-fit h-full items-center justify-end">
                <button onClick={() => HandleButtonClick(navigate)}>
                    <Icons name="IoIosSettings" library="io" size={35} />
                </button>
            </div>
        </div>
    );
};

export default Header;
