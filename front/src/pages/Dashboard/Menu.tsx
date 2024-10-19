// Modules
import endpoints from "./router";

// Components
import Point from "../../components/Point";
import { ReactComponent as Logo } from "../../assets/logo-500x500-1.svg";

// Libraries
import { Dispatch, SetStateAction } from "react";

interface MenuProps {
    selected: string;
    setSelected: Dispatch<SetStateAction<string>>;
}

const Menu = ({ selected, setSelected }: MenuProps) => {
    return (
        <div className="ml-10 w-fit h-[90vh] flex flex-col items-center justify-center">
            <div className="w-fit h-fit py-12 px-10 flex flex-col items-center justify-center bg-primary rounded-xl">
                <Logo className="relative right-2 w-36 h-36 mb-12 text-primary-content" />

                <div className="flex flex-col gap-4 items-start text-primary-content">
                    {endpoints.map((item, index) => {
                        const handleClick = () => {
                            setSelected(item.name);
                        };
                        return (
                            <Point
                                text={item.name}
                                icon={item.icon[0]}
                                library={item.icon[1]}
                                isSelected={item.name === selected}
                                onClick={handleClick}
                                key={index}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Menu;
