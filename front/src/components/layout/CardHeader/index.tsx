// Modules
import * as S from "./styles";
import * as T from "./types";

// Components
import Text from "../../common/Text";
import Image from "../../common/Image";

// Hooks
import { useTheme } from "../../../hooks/useTheme";

const CardHeader = ({ src, flexDirection, text }: T.CardHeaderProps) => {
    const theme = useTheme();

    const bodyStyle: Object = { flexDirection };

    const paragraph = text ? (
        <Text
            text={text}
            color={theme.middle}
            containerWidth={75}
        />
    ) : null;

    return (
        <S.Body style={bodyStyle}>
            <Image containerHeight={60} width={90} src={src} />
            {paragraph}
        </S.Body>
    );
};

export default CardHeader;
