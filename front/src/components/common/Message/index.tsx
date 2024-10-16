// Components
import Text from "../Text";

interface MessageProps {
    text: string;
    type: "error" | "success";
    style: "text" | "block";
    isVisible: boolean;
}

export const getStyle = (
    type: string,
    cardStyle: string,
    isVisible: boolean
) => {
    let style = "w-fit px-8 py-2 rounded";

    switch (type) {
        case "error":
            if (cardStyle === "block") {
                style +=
                    " bg-red-500 dark:bg-red-800 font-bold italic text-white dark:text-black";
            } else {
                style += " text-red-600 dark:text-red-400";
            }
            break;

        case "success":
            if (cardStyle === "block") {
                style +=
                    " bg-green-500 dark:bg-green-700 font-bold italic text-white dark:text-black";
            } else {
                style += " text-green-600 dark:text-green-400";
            }
            break;
    }

    style += isVisible ? " flex" : " invisible";

    return style;
};

const Message = ({ text, type, style, isVisible }: MessageProps) => {
    return (
        <div className={getStyle(type, style, isVisible)}>
            <Text text={text} />
        </div>
    );
};

export default Message;
