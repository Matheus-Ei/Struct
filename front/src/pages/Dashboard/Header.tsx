// Libraries
import { useNavigate } from "react-router-dom";

// Local
import { ReactComponent as Logo } from "assets/logo-1800x400-1.svg";
import Icons from "modules/Icons";
import clsx from "clsx";
import { SetStateType } from "types/global";
import router from "./router";

interface HeaderProps {
    tab: string;
    setTab: SetStateType<string>;
}

const handleGoSettings = (navigate: any) => {
    navigate("/settings");
};

const Header = ({ tab, setTab }: HeaderProps) => {
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

    const onClick = () => handleGoSettings(navigate);

    return (
        <div className="flex flex-row w-screen h-32 items-center justify-between px-12">
            <div className="flex flex-row w-fit h-full items-center justify-start gap-12">
                <Logo className="text-primary w-64 h-full" />

                <div className="flex flex-row gap-6">
                    {router.map(renderTabs)}
                </div>
            </div>

            <div className="flex flex-row w-fit h-full items-center justify-end">
                <button onClick={onClick}>
                    <Icons
                        name="IoIosSettings"
                        library="io"
                        className="text-4xl"
                    />
                </button>
            </div>
        </div>
    );
};

export default Header;
