import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: max(20vw, 360px);
  justify-content: space-evenly;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 9px;
  padding: 10px;
`;
export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;
