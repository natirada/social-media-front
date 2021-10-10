
import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled.div`

display: flex;
position: absolute;
left: 0;
right: 0;
top: 0;
bottom: 0;
justify-content: center;
align-items: center;
`

export const DotsContainer = styled.div`
width: 100px;
display: flex;
align-items: center;
justify-content: space-evenly;
`
export const Dot = styled(motion.div)`
height: 25px;
  width: 25px;
  background-color: ${({theme}) => theme.colors.primaryBackground};
  border-radius: 50%;
`
