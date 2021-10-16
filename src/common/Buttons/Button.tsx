import React, { FC } from 'react';
import BaseBtn from './BaseBtn';
import styled from 'styled-components';
import Text from 'common/Text/Text';

type BtnType = 'primary' | 'secondary' | 'tertiary';

interface Props {
  onClick?: () => void;
  className?: string;
  text: string;
  btnType?: BtnType;
}

export const Container = styled(BaseBtn)<{
  btnType?: BtnType;
}>`
  width: 108px;
  height: 36px;
  background-color: ${({ theme, btnType }) =>
    btnType === 'primary'
      ? theme.colors.primaryBackground
      : theme.colors.darkGray};
  border-radius: 4px;
`;

const Button: FC<Props> = ({
  onClick,
  className,
  text,
  btnType = 'primary',
}) => {
  return (
    <Container className={className} onClick={onClick} btnType={btnType}>
      <Text color={btnType === 'primary' ? 'white' : 'black'} fontWeight={500}>
        {text}
      </Text>
    </Container>
  );
};

export default Button;
