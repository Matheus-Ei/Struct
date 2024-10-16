interface TextProps {
    text: string;
}

const Text = ({ text }: TextProps) => {
    return <p className="text-center w-fit m-0">{text}</p>;
};

export default Text;
