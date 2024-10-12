import styled from "styled-components";

export const Body = styled.button`
    border: solid black 1px;
    border-radius: 10px;

    padding: 1.4vh;

    padding-left: 3vw;
    padding-right: 3vw;

    width: auto;
    height: auto;
`;

export const getStyle = (theme: any, isClicked: boolean) => {
    const style = isClicked
        ? {
              borderColor: theme.secondary,
              backgroundColor: theme.primary,
          }
        : { borderColor: theme.primary, backgroundColor: theme.secondary };

    return style;
};
