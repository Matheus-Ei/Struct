// Modules
import { useTheme } from "../../../hooks/useTheme";
import Icons from "../../../services/Icons";
import * as S from "./styles";
import * as T from "./types";

const IconPoint = ({ icons }: T.IconPointProps) => {
    const theme = useTheme();

    return (
        <S.Body>
            {icons.map((item: Array<string>, index: number) => {
                return (
                    <Icons
                        name={item[0]}
                        library={item[1]}
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
