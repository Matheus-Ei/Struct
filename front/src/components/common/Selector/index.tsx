// Modules
import * as S from "./styles";
import * as T from "./types";

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
        <S.Body onClick={handleClick} style={bodyStyle}>
            <Icons name={icon} library={repository} color={theme.secondary} />
            <S.Text>{name}</S.Text>
        </S.Body>
    );
};

export default scale(scale(Selector, 1.05, "hover"), 0.95, "click");
