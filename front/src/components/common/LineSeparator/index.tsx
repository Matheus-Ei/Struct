// Modules
import "./styles.css";

// Hooks
import { useTheme } from "../../../hooks/useTheme";

// Components
import Text from "../Text";

interface LineSeparatorProps {
    text: string;
    width: number;
    style: "mono" | "dual";
}

const LineSeparator = ({ text, width, style }: LineSeparatorProps) => {
    const theme = useTheme();
    const color = theme.middle;

    const Line = () => (
        <hr
            style={{ borderColor: color }}
            className="line-separator-horisontal"
        />
    );

    return (
        <div
            style={{ width: `${width}%`, justifyContent: "space-between" }}
            className="flex-body"
        >
            <Line />

            <Text text={text} color={color} size={1} />

            {style === "dual" ? (
                <Line />
            ) : (
                <hr
                    style={{ border: "none" }}
                    className="line-separator-horisontal"
                />
            )}
        </div>
    );
};

export default LineSeparator;
