// Components
import { ReactComponent as Logo } from "assets/logo-1800x400-1.svg";
import Icons from "services/Icons";

const Header = () => {
    return (
        <div className="flex flex-row w-screen h-[15vh] items-center justify-between px-12">
            <div className="flex flex-row w-fit h-full items-center justify-start gap-12">
                <Logo className="text-primary w-2/5 h-full" />

                <div className="flex flex-row gap-6">
                    <h1 className="font-bold text-xl">Projects</h1>
                </div>
            </div>

            <div className="flex flex-row w-fit h-full items-center justify-end">
                <Icons name="IoIosSettings" library="io" size={35} />
            </div>
        </div>
    );
};

export default Header;
