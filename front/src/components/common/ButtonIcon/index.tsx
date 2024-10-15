// Modules
import * as T from "./types";
import Icons from "../../../services/Icons";
import { useTheme } from "../../../hooks/useTheme";
import scale from "../../../animations/scale";

const ButtonIcon = ({ name, library, size, onClick }: T.ButtonIconProps) => {
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
