import styled from "styled-components";

export const Body = styled.button`
    background-color: white;

    border: solid black 1px;
    border-radius: 10px;

    padding-left: 50px;
    padding-right: 50px;

    color: black;

    &:active {
        background-color: black;
        color: white;
        border: solid black 1px;
    }
`;
