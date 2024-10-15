// Components
import Text from "./Text";

interface LineSeparatorProps {
    text: string;
    width: number;
    style: "mono" | "dual";
}

const LineSeparator = ({ text, width, style }: LineSeparatorProps) => {
    const Line = () => <hr />;

    return (
        <div>
            <Line />

            <Text text={text} />

            {style === "dual" ? <Line /> : <hr />}
        </div>
    );
};

export default LineSeparator;
