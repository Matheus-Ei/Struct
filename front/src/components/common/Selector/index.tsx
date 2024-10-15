// Modules
import "./styles.css";

// Hooks
import { useTheme } from "../../../hooks/useTheme";

// Services
import Icons from "../../../services/Icons";

// Libraries
import { Dispatch, SetStateAction } from "react";

// Animations
import scale from "../../../animations/scale";

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
    const theme = useTheme();

    const bodyStyle: Object = {
        backgroundColor: isSelected ? theme.semi : theme.primary,
        color: theme.secondary,
    };

    const handleClick = () => {
        if (setSelected) {
            setSelected(name);
        }

        if (onClick) {
            onClick();
        }
    };

    return (
        <div onClick={handleClick} style={bodyStyle} className="selector-body">
            <Icons name={icon} library={repository} color={theme.secondary} />
            <p style={{ cursor: "default" }}>{name}</p>
        </div>
    );
};

export default scale(scale(Selector, 1.05, "hover"), 0.95, "click");
