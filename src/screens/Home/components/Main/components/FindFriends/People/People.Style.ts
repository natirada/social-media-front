
import styled from "styled-components";

export const Container = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
height: 72px;
border-bottom: 1px solid ${({theme}) => theme.colors.lightGray};
`

export const Row = styled.div`
display: flex;
align-items: center;
`
export const ActionContainer = styled.button`
  background-color: ${({theme}) => theme.colors.gray};
  width: 36px;
  height: 36px;
  border-radius: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: ${({ theme }) => theme.colors.gray};
    cursor: pointer;
  }
`





