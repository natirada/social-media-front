import React, { FC, ReactNode, HTMLProps } from "react";
import styled from "styled-components";
import { IFontFamilys } from "style/styled";
import { fontFamilies } from "style/themes/defaultTheme";

type TextAlignType = "right" | "left" | "center";

interface Props extends HTMLProps<HTMLParagraphElement> {
  fontFamily?: keyof typeof fontFamilies;
  fontSize?: string;
  fontWeight?: number;
  textAlign?: TextAlignType;
  children: ReactNode;
}

const TextStyle = styled.p<Props>`
  font-family: ${({ fontFamily }) => fontFamily};
  font-size: ${({ fontSize }) => fontSize};
  font-weight: ${({ fontWeight }) => fontWeight};
  text-align: ${({ textAlign }) => textAlign};
  ${({ color }) => color && `color: ${color}`};
`;

const Text: FC<Props> = ({
  children,
  fontFamily = "Rubik",
  fontSize = "1rem",
  fontWeight = 400,
  textAlign = "center",
  color = "black",
  ...props
}) => {
  return (
    <TextStyle
      fontFamily={fontFamily}
      fontSize={fontSize}
      fontWeight={fontWeight}
      textAlign={textAlign}
      color={color}
      // {...props}
    >
      {children}
    </TextStyle>
  );
};

export default Text;
