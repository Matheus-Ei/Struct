// Components
import Text from "../Text";

interface MessageProps {
    text: string;
    type: "error" | "success";
    style: "text" | "block";
    isVisible: boolean;
}

const Message = ({ text, type, style, isVisible }: MessageProps) => {
    return (
        <div>
            <Text text={text} />
        </div>
    );
};

export default Message;
