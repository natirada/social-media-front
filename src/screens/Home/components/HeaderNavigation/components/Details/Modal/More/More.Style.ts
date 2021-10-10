import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: max(20vw, 360px);
`;

export const Item = styled.button`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  &:hover {
    background-color: ${({ theme }) => theme.colors.darkGray};
  }
`;
