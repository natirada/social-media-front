import styled from "styled-components";

export const Container = styled.div`
display: flex;
position: relative;
width: 100%;
height: 300px;
background-color: #EBEDF0;
justify-content: center;
align-items: center;
margin: 15px 0;
b
&:hover {
    background-color: #F2F3F5;
}
`;

export const Image = styled.img`
display: flex;
width: 100%;
height: 300px;
object-fit: contain;
`;

export const CloseBtn = styled.button`
display: flex;
position: absolute;
top: 5px;
right: 5px;
width: 40px;
height: 40px;
border-radius: 20px;
justify-content: center;
align-items: center;
border: none;
background-color: white;
&:hover {
    background-color: ${({theme}) => theme.colors.lightGray};
}
`;

