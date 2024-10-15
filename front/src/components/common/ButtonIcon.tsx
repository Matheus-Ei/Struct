// Components
import Icons from "../../services/Icons";

// Hooks
import { useTheme } from "../../hooks/useTheme";

// Animations
import scale from "../../animations/scale";

interface ButtonIconProps {
    name: string;
    library: string;
    size: number;
    onClick: () => any;
}

const ButtonIcon = ({ name, library, size, onClick }: ButtonIconProps) => {
    return (
        <div onClick={onClick}>
            <Icons
                name={name}
                library={library}
                color={useTheme().secondary}
                size={size}
            />
        </div>
    );
};

export default scale(scale(ButtonIcon, 1.2, "hover"), 0.95, "click");
