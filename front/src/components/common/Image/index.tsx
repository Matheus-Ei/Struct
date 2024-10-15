// Modules
import * as T from "./types";

// Hooks
import { useTheme } from "../../../hooks/useTheme";

const Image = ({ src, width, height, borderRadius }: T.ImageProps) => {
    const theme = useTheme();

    const bodyStyle = {
        height: `${height}%`,
        width: `${width}%`,
        borderRadius,
        borderColor: theme.middle,
    };

    return (
        <div style={bodyStyle} className="flex-body">
            <img style={{ width: "100%" }} src={src} />
        </div>
    );
};

export default Image;
