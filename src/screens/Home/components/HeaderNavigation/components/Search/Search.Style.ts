
import styled from "styled-components";
import {motion} from 'framer-motion';

export const Container = styled.div`
display: flex;
align-items: center;

`

export const FacebookLogo = styled(motion.img)`
width: 40px;
height: 40px;
position: absolute;
left: 0;
&:hover {
    cursor: pointer;
}
`;

export const LeftContainer = styled.div`
position: relative;
display: flex;
align-items: center;
width: 50px;
height: auto;
`;

export const InputContainer = styled.div`
display: flex;
align-items: center;
position: relative;
width: 250px;
height: 40px;
border: none;
background-color: ${({theme}) => theme.colors.gray};
border-radius: 20px;
`;

export const IconSerarhcContainer = styled(motion.div)`
left: 10px;
position: absolute;
top: auto;
`;
export const Icon = styled(motion.div)`
display: flex;
justify-content: center;
align-items: center;
width: 36px;
height: 36px;
border-radius: 18px;
background-color: ${({theme}) => theme.colors.gray};
margin: 0 5px;
`;


export const Input = styled(motion.input)`
position: absolute;
left: calc(10px + 25px);
top: auto;
width: 100%;
height: 40px;
border: none;
background-color: ${({theme}) => theme.colors.gray};
border-radius: 20px;
outline: none;
font-size: 1rem;
padding: 0 5px;
`;

export const SuggstionList = styled(motion.div)`
position: absolute;
top: 0;
left: 0;
width: 340px;
z-index: -2;
background-color: ${({theme}) => theme.colors.white};
border-radius: 0 0 9px 9px;
box-shadow: 0 12px 12px rgba(0, 0, 0, 0.2),inset 0 0 0 0 rgba(255, 255, 255, 0.5);;
padding: 60px 5px 15px 5px;
`;


export const BackContainer = styled(motion.div)`
position: absolute;
right: 0;
width: 40px;
height: 40px;
display: flex;
justify-content: center;
align-items: center;
border-radius: 20px;
&:hover {
    cursor: pointer;
    background-color: ${({theme}) => theme.colors.lightGray};
}

`;


export const User = styled.div`
width: 100%;
height: 48px;
display: flex;
justify-content: flex-start;
align-items: center;
border-radius: 9px;
margin: 4px 0;
&:hover {
    cursor: pointer;
    background-color: ${({theme}) => theme.colors.lightGray};
}

`;
