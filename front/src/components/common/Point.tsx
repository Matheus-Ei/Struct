// Components
import Icons from "../../services/Icons";
import Text from "./Text";

// Hooks
import { useTheme } from "../../hooks/useTheme";

interface PointProps {
    text: string;
    icon: string;
    library: string;
}

const Point = ({ icon, library, text }: PointProps) => {
    const theme = useTheme();

    return (
        <div
            className="flex-body"
            style={{ justifyContent: "flex-start", gap: "1vw" }}
        >
            <Icons
                name={icon}
                library={library}
                size={20}
                color={theme.secondary}
            />

            <Text text={text} color={theme.secondary} />
        </div>
    );
};

export default Point;
