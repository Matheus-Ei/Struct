// Modules
import * as T from "./types";

// Hooks
import { useTheme } from "../../../hooks/useTheme";

const Card = ({
    children,
    width,
    height,
}: T.CardProps)=> {
    const theme = useTheme();

    const style: Object = {
        width: `${width}%`,
        height: `${height}%`,
        backgroundColor: theme.primary,
        borderColor: theme.secondary,
    };

    return <div className="flex-body set-border" style={style}>{children}</div>;
};

export default Card;
