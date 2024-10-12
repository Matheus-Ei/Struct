// Modules
import * as S from "./styles";
import * as T from "./types";

// Hooks
import { useTheme } from "../../../hooks/useTheme";

// Components
import Text from "../Text";

const Message = ({
    text,
    type,
    cardStyle,
    isVisible,
}: T.MessageProps): JSX.Element => {
    const style = S.getStyle(useTheme(), type, cardStyle, isVisible);

    return (
        <S.Body style={style}>
            <Text text={text} size={1} />
        </S.Body>
    );
};

export default Message;
