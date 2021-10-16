import React, { FC } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

interface Props {
  onClick?: () => void;
  className?: string;
}

export const Container = styled(motion.button)`
  border: none;
  &:hover {
    cursor: pointer;
  }
`;

const BaseBtn: FC<Props> = ({ children, onClick, className }) => {
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

export default BaseBtn;
