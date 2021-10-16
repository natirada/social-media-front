
import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled.div`
display: flex;
justify-content: center;
height: 100%;
position: relative;
 `

export const NavItem = styled.div`
width: 130px;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
border-radius: 4px;
&:hover {
    cursor: pointer;
    background-color: ${({theme}) => theme.colors.lightGray};
}
`
export const Cursor = styled(motion.div)`
width: 130px;
height: 4px;
position: absolute;
bottom: 0;
left: 0;
background-color: ${({theme})=> theme.colors.primaryBackground};
 `
