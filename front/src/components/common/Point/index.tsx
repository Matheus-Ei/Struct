// Modules
import { useTheme } from "../../../hooks/useTheme";
import Icons from "../../../services/Icons";
import Text from "../Text";
import * as S from "./styles";
import * as T from "./types";

const Point = ({ icon, library, text }: T.PointProps) => {
    const theme = useTheme();

    return (
        <S.Body>
            <Icons
                name={icon}
                library={library}
                size={20}
                color={theme.secondary}
            />
            <Text text={text} color={theme.secondary} />
        </S.Body>
    );
};

export default Point;
