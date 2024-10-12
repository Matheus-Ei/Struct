import styled from "styled-components";

export const Body = styled.div`
    display: flex;

    align-items: center;
    justify-content: center;

    flex-direction: row;

    width: 95%;
    height: 6vh;
`;

export const Input = styled.input`
    border: solid 1px;
    border-radius: 10px;

    padding-left: 10px;
    font-size: 1.2em;
`;

export const PasswordButton = styled.button`
    position: relative;
    border: none;

    right: 50px;

    width: 0px;
    padding: 0px;
`;

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
    };

    return style;
};
