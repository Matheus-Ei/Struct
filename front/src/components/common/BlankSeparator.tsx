const getStyle = (direction: string, size: number) => {
    let style: Object = {};

    switch (direction) {
        case "horisontal":
            style = { width: `${size}px` };
            break;
        case "vertical":
            style = { height: `${size}px` };
            break;
    }

    return style;
};

interface BlankSeparatorProps {
    size: number;
    direction: "vertical" | "horisontal";
}

const BlankSeparator = ({ size, direction }: BlankSeparatorProps) => {
    return <div style={getStyle(direction, size)}></div>;
};

export default BlankSeparator;
