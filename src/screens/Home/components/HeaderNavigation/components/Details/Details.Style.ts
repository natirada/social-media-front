import { motion } from "framer-motion";
import Btn from "common/Buttons/CircleButton";
import styled from "styled-components";

export const Container = styled.div`
  width: max(20%, 250px);
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 100%;
  position: relative;
`;
export const MyProfile = styled.button`
  display: flex;
  border-radius: 22px;
  height: 44px;
  padding: 5px;
  align-items: center;
  border: none;
  background-color: transparent;
  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.lightBlue};
  }
`;

export const Action = styled(Btn)`
  display: flex;
  position: relative;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: ${({ theme }) => theme.colors.lightGray};
  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.lightBlue};
  }
`;

export const NotificationCounter = styled(motion.div)`
  width: 18px;
  height: 18px;
  border-radius: 9px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.red};
  position: absolute;
  right: -5px;
  top: -5px;
`;
export const Modal = styled(motion.div)`
  position: absolute;
  top: 100%;
  right: 0;
`;
