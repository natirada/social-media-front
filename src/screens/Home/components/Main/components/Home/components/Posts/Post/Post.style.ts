import { motion } from "framer-motion";
import styled from "styled-components";



export const Margin = styled.div<{
    mr?: string;
    ml?: string;
    mt?: string;
    mb?: string;
    m?: string;
}>`

${({mr}) => mr && `margin-right: ${mr}`}
${({ml}) => ml && `margin-left: ${ml}`}
${({mt}) => mt && `margin-top: ${mt}`}
${({mb}) => mb && `margin-bootom: ${mb}`}
${({m}) => m && `margin: ${m}`}
`;

export const Container = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
padding: ${({theme}) => theme.padding.small} ${({theme}) => theme.padding.small};
`;

export const Row = styled.div`
    display: flex;
    align-items: center;
`

export const Header = styled.div`
display: flex;
justify-content: space-between;
`;

export const Body = styled.div`
display: flex;
flex-direction: column;
padding: ${({theme}) => theme.padding.large} 0;
`;

export const Image = styled.img`
width: 100%;
height: auto;
border: 1px solid ${({theme}) => theme.colors.lightGray};
border-radius: 9px;
margin: ${({theme: {margin}}) => margin.large} 0;
object-fit: cover;
`;

export const Footer = styled.div`
display: flex;
justify-content: space-between;
`;

export const BtnAction = styled.button`
width:30%;
height: 44px;
border-radius: 9px;
border: none;
display: flex;
align-items: center;
justify-content: center;
background-color: transparent;
&:hover {
    background-color: ${({ theme }) => theme.colors.gray};
    cursor: pointer;
  }
`;

