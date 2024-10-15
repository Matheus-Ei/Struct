export const getStyle = (
    theme: any,
    type: string,
    cardStyle: string,
    isVisible: boolean
) => {
    let mainColor: string = "";
    let backgroundColor: string = "";
    let color: string = "";

    switch (type) {
        case "error":
            mainColor = theme.error;
            break;

        case "success":
            mainColor = theme.success;
            break;
    }

    switch (cardStyle) {
        case "block":
            backgroundColor = mainColor;
            break;

        case "text":
            color = mainColor;
            break;
    }

    const display = isVisible ? "flex" : "none";

    const style: Object = {
        color,
        backgroundColor,
        display,
    };

    return style;
};
