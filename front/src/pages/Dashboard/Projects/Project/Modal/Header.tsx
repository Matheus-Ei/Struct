// Libraries
import clsx from "clsx";

// Local
import { SetStateType } from "types/global";
import { ModalType, TabProps } from "./utils/types";
import router from "./utils/router";
import Icon from "components/Icon";
import { useNavigate } from "react-router-dom";

interface HeaderProps {
    tab: string;
    setTab: SetStateType<string>;
    modal: ModalType;
}

const Header = ({ tab, setTab, modal }: HeaderProps) => {
    const navigate = useNavigate();

    const renderTabs = (
        item: [string, (arg0: TabProps) => JSX.Element | null],
        index: number
    ) => {
        const tabCss = clsx("select-none cursor-pointer", {
            "font-bold text-xl": tab === item[0],
            "text-lg": tab !== item[0],
        });

        return (
            <h1 key={index} className={tabCss} onClick={() => setTab(item[0])}>
                {item[0]}
            </h1>
        );
    };

    return (
        <div className="w-fit flex flex-row gap-x-8 p-2 ml-8">
            {router.map(renderTabs)}

            <Icon
                name="MdOpenInNew"
                library="md"
                className="absolute cursor-pointer top-1 right-10 text-lg"
                onClick={() => navigate(`/project/${modal.projectId}`)}
            />
        </div>
    );
};

export default Header;
