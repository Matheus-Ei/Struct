export const getStyle = (direction: string, size: number) => {
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
