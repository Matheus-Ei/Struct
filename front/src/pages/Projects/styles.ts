import styled from "styled-components";

export const Body = styled.div`
    width: 100%;
    height: 100%;

    display: flex;

    justify-content: flex-start;
    align-items: center;

    flex-direction: column;
`;

export const Grid = styled.div`
    display: grid;

    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: repeat(auto, 1fr);

    width: 95%;
    height: 55vh;

    column-gap: 3vh;
    grid-row-gap: 3vh;

    overflow-y: auto;
    overflow-x: hidden;

    padding-right: 1vw;

    border-bottom: solid 1px;

    & > div:nth-child(2n + 1):last-child {
        grid-column: span 2;
    }
`;
