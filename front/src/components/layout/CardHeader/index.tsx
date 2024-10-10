import Image from "../../common/Image";
import Text from "../../common/Text";
import { useTheme } from "../../../hooks/useTheme";
import * as S from "./styles";
import * as T from "./types";

export const CardHeader = ({ src, flexDirection, text }: T.CardHeaderProps) => {
    const theme = useTheme();

    const bodyStyle: Object = { flexDirection };

    const paragraph = text ? (
        <Text
            text={text}
            containerWidth={60}
            color={theme.middle}
        />
    ) : null;

    return (
        <S.Body style={bodyStyle}>
            <Image containerHeight={60} width={90} src={src} />
            {paragraph}
        </S.Body>
    );
};
