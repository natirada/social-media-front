import { deviceSizes } from "style/themes/defaultTheme";
import styled from "styled-components";

export const Container = styled.div`
height: 100%;
width: 100%;
grid-column: drawer;
@media (max-width: ${deviceSizes.tablet}px) {
display: none;
}

`
export const BtnContainer = styled.div`
height: 54px;
width: max(250px,50%);
display: flex;
align-items: center;
padding: 0 ${({theme}) => theme.padding.small};
border-radius: 4px;
&:hover {
    background-color: ${({ theme }) => theme.colors.darkGray};
    cursor: pointer;
  }
`
export const menuName = styled.p`
font-size: 1rem;
font-family: ${({theme}) => theme.fontFamilies.Rubik};
`

export const Icon = styled.img`
width: 36px;
height: 36px;
margin: 0 ${({theme}) => theme.margin.large};
`
export const SeeMore = styled.div`
width: 36px;
height: 36px;
border-radius: 18px;
display: flex;
justify-content: center;
align-items: center;
background: #E4E6EB;
margin: 0 ${({theme}) => theme.margin.large};
`
export const Margin = styled.div`
margin: 0 ${({theme}) => theme.margin.large};
`

