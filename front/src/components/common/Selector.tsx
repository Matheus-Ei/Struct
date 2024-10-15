// Services
import Icons from "../../services/Icons";

// Libraries
import { Dispatch, SetStateAction } from "react";

interface SelectorProps {
    name: string;
    icon: string;
    repository: string;
    isSelected: boolean;
    setSelected?: Dispatch<SetStateAction<string>>;
    onClick?: () => any;
}

const Selector = ({
    name,
    icon,
    repository,
    isSelected,
    setSelected,
    onClick,
}: SelectorProps) => {
    const handleClick = () => {
        if (setSelected) {
            setSelected(name);
        }

        if (onClick) {
            onClick();
        }
    };

    return (
        <div onClick={handleClick}>
            <Icons name={icon} library={repository} />
            <p>{name}</p>
        </div>
    );
};

export default Selector;
