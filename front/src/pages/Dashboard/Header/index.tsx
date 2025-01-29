// Local
import { SetStateType } from "types/global";
import Left from "./Left";
import Right from "./Right";

interface HeaderProps {
    tab: string;
    setTab: SetStateType<string>;
}

const Header = ({ tab, setTab }: HeaderProps) => {
    return (
        <div className="flex flex-row w-screen h-32 items-center justify-between px-12">
            <Left tab={tab} setTab={setTab} />

            <Right />
        </div>
    );
};

export default Header;
