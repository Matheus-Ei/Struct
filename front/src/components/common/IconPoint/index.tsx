// Modules
import * as T from "./types";

// Hooks
import { useTheme } from "../../../hooks/useTheme";

// Components
import Icons from "../../../services/Icons";

const IconPoint = ({ icons }: T.IconPointProps) => {
    const theme = useTheme();

    return (
        <div
            className="flex-body"
            style={{ justifyContent: "flex-start", gap: "1vw" }}
        >
            {icons.map((item: T.IconType, index: number) => {
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
