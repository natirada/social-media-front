import React, { ReactElement } from "react";
import styled, { keyframes } from "styled-components";

interface Props {
  isVisable: boolean;
  children: ReactElement;
}

const translationAnimation = keyframes`
0%  {   transform: translateY(-400px);  opacity: 0}
40% {    transform: translateY(100px);}
65% {    transform: translateY(200px); opacity: 1}
100%{    transform: translateY(250px); opacity: 1 }
`;

const scaleAnimation = keyframes`
0%  {   opacity: 0; scale(0,0)}
50% {    opacity: 0.5 ; scale(0.5,0.5)}
100%{    opacity: 1 ; scale(1,1) }
`;
const opacityAnimation = keyframes`
0%  {   opacity: 0}
50% {    opacity: 0.5}
100%{    opacity: 1 }
`;

const Styles = {
  Container: styled.div`
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: rgba(255, 255, 255, 0.8);
    animation: ${opacityAnimation} 0.3s linear;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  ChildrenContainer: styled.div`
    animation: ${scaleAnimation} 0.3s linear;
    -webkit-animation-fill-mode: forwards;
  `,
};

const BaseModal = ({ isVisable, children }: Props) => {
  return isVisable ? (
    <Styles.Container>
      <Styles.ChildrenContainer>{children}</Styles.ChildrenContainer>
    </Styles.Container>
  ) : null;
};

export default BaseModal;
