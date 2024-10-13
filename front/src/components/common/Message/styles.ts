import styled from "styled-components";

export const Body = styled.div`
    display: flex;

    align-items: center;
    justify-content: center;

    width: auto;
    height: auto;

    border-radius: 10px;

    padding: 2%;

    padding-left: 5%;
    padding-right: 5%;

    margin-bottom: 2vh;

    font-style: italic;
`;

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
