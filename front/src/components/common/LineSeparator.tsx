// Components
import Text from "./Text";

interface LineSeparatorProps {
    text: string;
    style: "mono" | "dual";
}

const LineSeparator = ({ text, style }: LineSeparatorProps) => {
    return (
        <div className="flex flex-row items-center justify-between w-3/4 ">
            <hr className="border w-1/3" />

            <Text text={text} />

            <hr className="border w-1/3" />
        </div>
    );
};

export default LineSeparator;
