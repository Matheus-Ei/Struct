// Modules
import * as S from "./styles";
import * as T from "./types";

// Hooks
import { useTheme } from "../../../hooks/useTheme";

// Components
import Text from "../Text";

const Message = ({ text, type, style, isVisible }: T.MessageProps) => {
    const bodyStyle = S.getStyle(useTheme(), type, style, isVisible);

    return (
        <div style={bodyStyle} className="set-border flex-body space-around">
            <Text text={text} size={1} />
        </div>
    );
};

export default Message;
