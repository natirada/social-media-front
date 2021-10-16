import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: column;
  border-radius: 9px;
  padding: 10px 0;
  &:hover {
    background-color: ${({ theme }) => theme.colors.gray};
  }
`;

export const Body = styled.div`
  width: 100%;
  height: 60%;
  display: flex;
`;
export const Fotter = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 15%;
`;
