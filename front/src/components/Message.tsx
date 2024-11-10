interface MessageProps {
    text: string;
    type: "error" | "success";
    box: "text" | "block";
    isVisible: boolean;
}

const Message = ({ text, type, box, isVisible }: MessageProps) => {
    const blockStyle = `${type === "error" ? "bg-error text-error-content" : "bg-success text-success-content"}`;
    const textStyle = `${type === "error" ? "text-error" : "text-success"}`;

    const messageStyle = `${box === "text" ? `${textStyle} my-4 text-center` : `${blockStyle} text-center rounded-btn px-10 py-2 my-4`}
                          ${isVisible ? "flex" : "invisible"}`;

    return <p className={messageStyle}>{text}</p>;
};

export default Message;
