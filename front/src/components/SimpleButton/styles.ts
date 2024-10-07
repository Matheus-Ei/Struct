import styled from "styled-components";

export const BodyWhite = styled.button`
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

export const BodyBlack = styled.button`
    background-color: black;
    border-radius: 10px;

    padding-left: 50px;
    padding-right: 50px;

    color: white;

    &:active {
        border: solid black 1px;
        color: black;
        background-color: white;
    }
`;
