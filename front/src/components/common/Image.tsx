// Hooks
import { useTheme } from "../../hooks/useTheme";

interface ImageProps {
    src: string;

    borderRadius?: number;

    height?: number;
    width?: number;
}

const Image = ({ src, width, height, borderRadius }: ImageProps) => {
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
