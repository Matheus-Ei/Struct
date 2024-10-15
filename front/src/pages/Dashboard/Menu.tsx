// Modules
import routes from "./routes";

// Hooks
import { useTheme } from "../../hooks/useTheme";

// Utils
import File from "../../utils/file";

// Components
import Selector from "../../components/common/Selector";
import Image from "../../components/common/Image";

// Libraries
import { Dispatch, SetStateAction } from "react";

interface MenuProps {
    selectedName: string;
    setSelected: Dispatch<SetStateAction<string>>;
}

type SingleRouteType = [string, string, string, () => JSX.Element];

const Menu = ({ selectedName, setSelected }: MenuProps) => {
    const theme = useTheme();

    return (
        <div className="dashboard-menu-body">
            <Image
                width={80}
                src={File.get(`images/logo-1920x1080-2-${theme.style}.png`)}
            />
            <div className="dashboard-menu-content">
                {routes.map((item: SingleRouteType, index: number) => {
                    return (
                        <Selector
                            name={item[0]}
                            icon={item[1]}
                            repository={item[2]}
                            isSelected={item[0] === selectedName ? true : false}
                            setSelected={setSelected}
                            key={index}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default Menu;
