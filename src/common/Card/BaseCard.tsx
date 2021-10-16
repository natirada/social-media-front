import React from "react";
import { FC } from "react";
import styled from "styled-components";

interface Props {
  children: React.ReactElement;
  width: string;
  height?: string;
  minHeight?: string;
}

const Styles = {
  Container: styled.div<{
    width: string;
    height: string;
    minHeight?: string;
  }>`
    background-color: ${({ theme }) => theme.colors.white};
    width: ${({ width }) => width};
    height: ${({ height }) => height};
    border-radius: 8px;
    ${({ minHeight }) => minHeight && `min-height: ${minHeight}`}
  `,
};

const BaseCard: FC<Props> = ({
  children,
  width = "100%",
  height = "100%",
  ...props
}: Props) => {
  return (
    <Styles.Container width={width} height={height} {...props}>
      {children}
    </Styles.Container>
  );
};

export default BaseCard;
