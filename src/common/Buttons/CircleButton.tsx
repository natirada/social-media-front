import React, { FC } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

interface Props {
  onClick?: () => void;
  className?: string;
}

export const Container = styled(motion.button)`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  border: none;
  background-color: transparent;
  &:hover {
    background-color: ${({ theme }) => theme.colors.gray};
    cursor: pointer;
  }
`;

const CircleButton: FC<Props> = ({ children, onClick, className = 'className'}) => {
  return (
    <Container
      className={className}
      onClick={onClick}
      whileTap={{ scale: 0.7 }}
    >
      {children}
    </Container>
  );
};

export default CircleButton;
