interface MessageProps {
    text: string;
    type: "error" | "success";
    style: "text" | "block";
    isVisible: boolean;
}

const Message = ({ text, type, style, isVisible }: MessageProps) => {
    const blockStyle = `${type === "error" ? "bg-error text-primary" : "bg-success text-primary"}`;
    const textStyle = `${type === "error" ? "text-error bg-primary" : "text-success bg-primary"}`;

    const messageStyle = `${style === "text" ? `${textStyle} my-4 text-center` : `${blockStyle} text-center rounded-lg px-10 py-2 my-4`}
                          ${isVisible ? "flex" : "invisible"}`;

    return <p className={messageStyle}>{text}</p>;
};

export default Message;
