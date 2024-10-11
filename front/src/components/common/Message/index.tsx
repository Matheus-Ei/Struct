// Modules
import * as S from "./styles";
import * as T from "./types";

// Hooks
import { useTheme } from "../../../hooks/useTheme";

import Text from "../Text";

const Message = ({
    text,
    type,
    cardStyle,
    isVisible,
}: T.MessageProps): JSX.Element => {
    const theme = useTheme();

    let backgroundColor: string = theme.primary;
    let color: string = theme.primary;

    let mainColor: string = theme.primary;

    if (type === "error") {
        mainColor = theme.error;
    } else if (type === "success") {
        mainColor = theme.success;
    }

    if (cardStyle === "block") {
        backgroundColor = mainColor;
    } else {
        color = mainColor;
    }

    const display = isVisible ? "flex" : "none";

    const style: Object = {
        color,
        backgroundColor,
        display,
    };

    return (
        <S.Body style={style}>
            <Text text={text} size={1} />
        </S.Body>
    );
};

export default Message;
