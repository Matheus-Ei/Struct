// Modules
import * as S from "./styles";
import * as T from "./types";

// Components
import Text from "../../common/Text";
import Image from "../../common/Image";

// Hooks
import { useTheme } from "../../../hooks/useTheme";

// Libraries
import React from "react";

const CardHeader = ({ src, flexDirection, text }: T.CardHeaderProps): JSX.Element => {
    const theme = useTheme();

    const bodyStyle: Object = { flexDirection };

    const paragraph = text ? (
        <Text
            text={text}
            color={theme.middle}
            size={1.2}
            containerWidth={75}
        />
    ) : null;

    return (
        <S.Body style={bodyStyle}>
            <Image containerHeight={50} width={60} src={src} />
            {paragraph}
        </S.Body>
    );
};

export default React.memo(CardHeader);
