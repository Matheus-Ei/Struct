// Hooks
import { useTheme } from "../../hooks/useTheme";

// Components
import Icons from "../../services/Icons";

interface IconType {
    name: string;
    library: string;
}

type MultiIconType = Array<IconType>;

interface IconPointProps {
    icons: MultiIconType;
}

const IconPoint = ({ icons }: IconPointProps) => {
    const theme = useTheme();

    return (
        <div
            className="flex-body"
            style={{ justifyContent: "flex-start", gap: "1vw" }}
        >
            {icons.map((item: IconType, index: number) => {
                return (
                    <Icons
                        name={item.name}
                        library={item.library}
                        size={20}
                        color={theme.secondary}
                        key={index}
                    />
                );
            })}
        </div>
    );
};

export default IconPoint;
