import React from "react";
import styled from "styled-components";

interface Props {}

const Styles = {
  Container: styled.div`
    width: 100%;
    border: 1px solid ${({ theme }) => theme.colors.lightGray};
  `,
};

const Hr = (props: Props) => {
  return <Styles.Container />;
};

export default Hr;
