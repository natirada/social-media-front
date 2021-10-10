import styled from "styled-components";

export const Container = styled.div`
display: flex;
 justify-content: space-evenly;
 width: 100%;
height:190px;
margin-top: 10px;
`

export const CardContainer = styled.div`
display: flex;
height: 100%;
flex-direction: column;
justify-content: space-around;
padding: 0 0.4rem;
`

export const CreatePostBtn = styled.div`
width: 93%;
height: 40px;
border-radius: 20px;
background-color: ${({theme}) => theme.colors.gray};
display: flex;
align-items: center;
justify-content: flex-start;
padding: 0 1rem;
&:hover {
        background-color: ${({theme}) => theme.colors.lightGray};
        cursor: pointer;
}
`

export const Row = styled.div`
display: flex;
justify-content: space-between;
width: 100%;
`
export const ActionBtn = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 100%;
height: 45px;
border-radius: 9px;
&:hover {
        background-color: ${({theme}) => theme.colors.lightGray};
        cursor: pointer;
}
`
export const ActionText = styled.span`
margin: 0 0.5rem;
font-size: 1.8vh;
`


