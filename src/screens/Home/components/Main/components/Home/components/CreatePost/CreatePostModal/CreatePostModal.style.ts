import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled.div`
display: flex;
`;

export const BodyDialog = styled.div`
position: relative;
display: flex;
flex-direction: column;
overflow-y: auto;
justify-content: space-between;
width: 100%;
min-height: 428px;
`
export const TextArea = styled.textarea`
width: 100%;
min-height: 130px;
padding: 1rem;
resize: none;
font-size: 1rem;
margin: 5px 0;
border: none;
outline: none;
`

export const AddToPostContainer = styled.div`
width: 100%;
height: 58px;
display: flex;
justify-content: space-between;
align-items: center;
border-radius: 9px;
border: 1px solid gray;
padding: 1rem;
background-color: transparent;
`
export const PostActionBtn = styled(motion.button)`
border: none;
width: 40px;
height: 40px;
border-radius: 20px;
margin: 4px;

`

export const BtnSubmit = styled.button<{
    disabled?: boolean;
}>`
width: 100%;
height: 40px;
border: none;
border-radius: 9px;
margin: 10px 0;
background-color: ${({theme }) => theme.colors.blue};
${({disabled = true , theme}) => disabled && `background-color: ${theme.colors.gray}; cursor: not-allowed;`}
`