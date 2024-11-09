import { ReactComponent as Logo } from "assets/logo-1800x400-1.svg";
import Icons from "services/Icons";
import { useNavigate } from "react-router-dom";
import { Dispatch, SetStateAction } from "react";

interface HeaderProps {
    tab: string;
    setTab: Dispatch<SetStateAction<string>>;
}

const handleGoSettings = (navigate: any) => {
    navigate("/settings");
};

const Header = ({ tab, setTab }: HeaderProps) => {
    const navigate = useNavigate();

    const allTabs = ["Projects", "Tools"];

    const selectedStyle = "font-bold cursor-pointer select-none text-xl";
    const notSelectedStyle = "cursor-pointer select-none text-lg";

    const renderTabs = (item: any, index: number) => {
        return (
            <h1
                className={item === tab ? selectedStyle : notSelectedStyle}
                onClick={() => setTab(item)}
                key={index}
            >
                {item}
            </h1>
        );
    };

    const onClick = () => handleGoSettings(navigate);

    return (
        <div className="flex flex-row w-screen h-32 items-center justify-between px-12">
            <div className="flex flex-row w-fit h-full items-center justify-start gap-12">
                <Logo className="text-primary w-64 h-full" />

                <div className="flex flex-row gap-6">
                    {allTabs.map(renderTabs)}
                </div>
            </div>

            <div className="flex flex-row w-fit h-full items-center justify-end">
                <button onClick={onClick}>
                    <Icons name="IoIosSettings" library="io" size={35} />
                </button>
            </div>
        </div>
    );
};

export default Header;
