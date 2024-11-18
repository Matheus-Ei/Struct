interface MessageProps {
    text: string | null;
    type: "error" | "success";
    box: "text" | "block";
    isVisible: boolean;
}

const Message = ({ text, type, box, isVisible }: MessageProps) => {
    const blockStyle = `${type === "error" ? "bg-error text-error-content" : "bg-success text-success-content"}`;
    const textStyle = `${type === "error" ? "text-error" : "text-success"}`;

    const messageStyle = `${box === "text" ? `${textStyle} my-2 text-center` : `${blockStyle} text-center rounded-btn px-8 py-1 my-2`}
                          ${isVisible ? "flex" : "invisible"}`;

    if(!isVisible) return null

    return <p className={messageStyle}>{text}</p>;
};

export default Message;
