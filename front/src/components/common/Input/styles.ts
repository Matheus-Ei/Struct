export const getStyle = (
    width: number | undefined,
    height: number | undefined,
    theme: any
) => {
    const style = {
        width: `${width}%`,
        height: `${height}%`,
        color: theme.secondary,
        backgroundColor: theme.primary,
        borderColor: theme.middle,
        fontSize: "1.1em",
        paddingLeft: "0.8vw",
    };

    return style;
};
