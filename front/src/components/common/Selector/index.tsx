// Modules
import * as T from "./types";
import "./styles.css";

// Hooks
import { useTheme } from "../../../hooks/useTheme";

// Services
import Icons from "../../../services/Icons";

// Animations
import scale from "../../../animations/scale";

const Selector = ({
    name,
    icon,
    repository,
    isSelected,
    setSelected,
    onClick,
}: T.SelectorProps) => {
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
