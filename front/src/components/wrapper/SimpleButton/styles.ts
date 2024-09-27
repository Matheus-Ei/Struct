import styled from "styled-components";

export const Body = styled.button`
    background-color: white;

    border: solid lightgray 1px;
    border-radius: 10px;

    padding-left: 30px;
    padding-right: 30px;

    &:hover {
        border: solid gray 1px;
    }

    &:active {
        border: solid black 1px;
    }
`;
