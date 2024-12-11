// Library
import clsx from "clsx";

// Local
import { ReactComponent as Logo } from "assets/logo-1800x400-1.svg";
import router from "../router";
import { SetStateType } from "types/global";

interface LeftProps {
    tab: string;
    setTab: SetStateType<string>;
}

const Left = ({ tab, setTab }: LeftProps) => {
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

    return (
        <div className="flex flex-row w-fit h-full items-center justify-start gap-12">
            <Logo className="text-primary w-64 h-full" />

            <div className="flex flex-row gap-6">{router.map(renderTabs)}</div>
        </div>
    );
};

export default Left;
