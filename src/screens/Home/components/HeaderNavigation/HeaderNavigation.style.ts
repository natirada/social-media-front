import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100%;
    background-color: ${({theme}) => theme.colors.white};
    box-shadow: 0 2px 2px -2px gray;
    grid-area: header;

`