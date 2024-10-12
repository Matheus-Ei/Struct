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
    style,
    isVisible,
}: T.MessageProps): JSX.Element => {
    const bodyStyle = S.getStyle(useTheme(), type, style, isVisible);

    return (
        <S.Body style={bodyStyle}>
            <Text text={text} size={1} />
        </S.Body>
    );
};

export default Message;
