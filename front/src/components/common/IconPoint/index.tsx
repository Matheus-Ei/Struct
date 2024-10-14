// Modules
import { useTheme } from "../../../hooks/useTheme";
import Icons from "../../../services/Icons";
import * as S from "./styles";
import * as T from "./types";

const IconPoint = ({ icons }: T.IconPointProps) => {
    const theme = useTheme();

    return (
        <S.Body>
            {icons.map((item: T.IconType, index: number) => {
                return (
                    <Icons
                        name={item.name}
                        library={item.library}
                        size={20}
                        color={theme.secondary}
                        key={index}
                    />
                );
            })}
        </S.Body>
    );
};

export default IconPoint;
