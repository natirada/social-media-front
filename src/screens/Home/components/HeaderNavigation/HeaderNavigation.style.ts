import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 60px;
    background-color: ${({theme}) => theme.colors.white};
    box-shadow: 0 2px 2px -2px gray;
    grid-area: header;
    position: sticky;
    top: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 ${({theme}) => theme.padding.large};
`