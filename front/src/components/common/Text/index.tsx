// Modules
import * as T from "./types";

const Text = ({ text, color, size, weight, containerWidth }: T.TextProps) => {
    const style: Object = {
        color,
        fontWeight: weight,
        fontSize: size ? `${size}em` : "",
        cursor: "default",
    };

    const containerStyle = { width: `${containerWidth}%` };

    return (
        <div style={containerStyle}>
            <p style={style} className="basic-text">
                {text}
            </p>
        </div>
    );
};

export default Text;
