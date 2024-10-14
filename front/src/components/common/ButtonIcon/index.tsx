// Modules
import * as T from "./types";
import * as S from "./styles";
import Icons from "../../../services/Icons";
import { useTheme } from "../../../hooks/useTheme";
import scale from "../../../animations/scale";

const ButtonIcon = ({ name, library, size, onClick }: T.ButtonIconProps) => {
    return (
        <S.Body onClick={onClick}>
            <Icons
                name={name}
                library={library}
                color={useTheme().secondary}
                size={size}
            />
        </S.Body>
    );
};

export default scale(scale(ButtonIcon, 1.2, "hover"), 0.95, "click");
