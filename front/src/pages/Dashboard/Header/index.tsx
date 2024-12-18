// Local
import { SetStateType } from "types/global";
import Logo from "./Logo";
import ProfilePhoto from "./ProfilePhoto";
import Tabs from "./Tabs";

interface HeaderProps {
    tab: string;
    setTab: SetStateType<string>;
}

const Header = ({ tab, setTab }: HeaderProps) => {
    return (
        <div className="flex flex-row w-screen h-32 items-center justify-between px-12">
            <div className="flex flex-row w-fit h-full items-center justify-start gap-12">
                <Logo />
                <Tabs tab={tab} setTab={setTab} />
            </div>

            <ProfilePhoto />
        </div>
    );
};

export default Header;
