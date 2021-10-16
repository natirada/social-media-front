import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: max(20vw, 360px);
  background: ${({theme}) => theme.colors.white};
  border-radius: 9px;
  padding: 10px;
`;

export const Item = styled.button<{
  height?: number;
}>`
  width: 100%;
  display: flex;
  align-items: center;
  background-color: transparent;
  padding: 10px 0;
  &:hover {
    background-color: ${({ theme }) => theme.colors.gray};
    cursor: pointer;
  }
  border-radius: 9px;
`;

export const IconContainer = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 18px;
  background-color: ${({theme}) => theme.colors.darkGray};
  display: flex;
  justify-content: center;
 align-items: center;
 margin-right: 5px;
`;

export const ExtraIconContainer = styled.div`
  width: 36px;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
`;
