import React, { FC, ReactNode } from "react";
import styled from "styled-components";
import { IFontFamilys } from "style/styled";
import { fontFamilies } from "style/themes/defaultTheme";

interface Props {
  children: ReactNode;
  fontFamily?: keyof typeof fontFamilies;
  fontSize?: string;
  fontWeight?: number;
}

const TextStyle = styled.p<{
  fontFamily: keyof typeof fontFamilies;
  fontSize: string;
  fontWeight: number;
}>`
  font-family: ${({ fontFamily }) => fontFamily};
  font-size: ${({ fontSize }) => fontSize};
  font-weight: ${({ fontWeight }) => fontWeight};
`;

const Text: FC<Props> = ({
  children,
  fontFamily = "Rubik",
  fontSize = "1rem",
  fontWeight = 400,
}) => {
  return (
    <TextStyle
      fontFamily={fontFamily}
      fontSize={fontSize}
      fontWeight={fontWeight}
    >
      {children}
    </TextStyle>
  );
};

export default Text;
