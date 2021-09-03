import styled from "styled-components";

const Container = styled.div``;

const Body = styled.div`
  width: 100%;
  height: 70vh;
  background-color: ${({ theme }) => theme.colors.gray};
`;

const Logo = styled.img`
  height: 150px;
  display: flex;
  align-items: flex-start;
`;
const Footer = styled.div``;

const GridContianer = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  height: 100%;
  @media only screen and ${({ theme }) => theme.breakPoints.tablet} {
    grid-template-columns: auto;
  }
`;

const GridItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default {
  Container,
  Body,
  Footer,
  Logo,
  GridContianer,
  GridItem,
};
