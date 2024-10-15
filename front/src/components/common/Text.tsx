interface TextProps {
    text: string;
}

const Text = ({ text }: TextProps) => {
    return <p className="text-neutral-950 dark:text-neutral-50">{text}</p>;
};

export default Text;
