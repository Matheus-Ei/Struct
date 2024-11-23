// Libraries
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import clsx from "clsx";

// Local
import { ReactComponent as Logo } from "assets/logo-1800x400-1.svg";
import ContextMenu from "components/ContextMenu";
import { SetStateType } from "types/global";
import getPosition from "utils/getPosition";
import useToggle from "hooks/useToggle";
import Icons from "modules/Icons";
import router from "./router";

interface HeaderProps {
    tab: string;
    setTab: SetStateType<string>;
}

const Header = ({ tab, setTab }: HeaderProps) => {
    const [showMenu, toggleShowMenu] = useToggle(false);
    const menuRef = useRef<HTMLDivElement>(null);

    const navigate = useNavigate();

    const renderTabs = (item: [string, () => JSX.Element], index: number) => {
        const tabCss = clsx({
            "font-bold cursor-pointer select-none text-xl": tab === item[0],
            "cursor-pointer select-none text-lg": tab !== item[0],
        });

        return (
            <h1 className={tabCss} onClick={() => setTab(item[0])} key={index}>
                {item[0]}
            </h1>
        );
    };

    const openOptions = () => {
        toggleShowMenu(true);
    };

    const { left: x, bottom: y } = getPosition(menuRef);
    return (
        <div className="flex flex-row w-screen h-32 items-center justify-between px-12">
            <div className="flex flex-row w-fit h-full items-center justify-start gap-12">
                <Logo className="text-primary w-64 h-full" />

                <div className="flex flex-row gap-6">
                    {router.map(renderTabs)}
                </div>
            </div>

            <div
                className="flex flex-row w-fit h-full items-center justify-end"
                ref={menuRef}
            >
                <Icons
                    name="FaUserAstronaut"
                    library="fa"
                    className="text-4xl"
                    onClick={openOptions}
                />

                <ContextMenu
                    onClose={() => toggleShowMenu(false)}
                    position={{ x: x - 100, y: y - 45 }}
                    show={showMenu}
                >
                    <div className="flex flex-col items-start justify-center">
                        <div
                            className="flex items-center justify-center gap-x-2 cursor-pointer select-none text-lg"
                            onClick={() => navigate("/profile")}
                        >
                            <Icons name="FaUser" library="fa6" />

                            <h1>Profile</h1>
                        </div>

                        <div
                            className="flex items-center justify-center gap-x-2 cursor-pointer select-none text-lg"
                            onClick={() => navigate("/settings")}
                        >
                            <Icons name="IoMdSettings" library="io" />

                            <h1>Settings</h1>
                        </div>
                    </div>
                </ContextMenu>
            </div>
        </div>
    );
};

export default Header;
