import styled from "styled-components";

export const Body = styled.div`
    width: 100%;
    height: 85vh;

    display: flex;

    justify-content: center;
    align-items: center;

    flex-direction: column;

`;

export const Grid = styled.div`
    display: grid;

    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);

    width: 95%;
    height: 80%;

    column-gap: 3vh;
    grid-row-gap: 3vh;

    overflow-y: auto;
    overflow-x: hidden;

    padding-right: 1vw;
`;
