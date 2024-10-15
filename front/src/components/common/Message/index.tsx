// Modules
import * as S from "./styles";

// Hooks
import { useTheme } from "../../../hooks/useTheme";

// Components
import Text from "../Text";

interface MessageProps {
    text: string;
    type: string;
    style: string;
    isVisible: boolean;
}

const Message = ({ text, type, style, isVisible }: MessageProps) => {
    const bodyStyle = S.getStyle(useTheme(), type, style, isVisible);

    return (
        <div style={bodyStyle} className="set-border flex-body space-around">
            <Text text={text} size={1} />
        </div>
    );
};

export default Message;
