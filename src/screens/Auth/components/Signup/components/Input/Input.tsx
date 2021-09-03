import React, { FC, InputHTMLAttributes, ChangeEventHandler } from "react";
import styled from "styled-components";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  width?: number;
  value: string;
  setValue: ChangeEventHandler<HTMLInputElement>;
  error?: string | undefined;
}

const Styles = {
  Container: styled.div<{
    width?: number;
  }>`
    width: ${({ width = 100 }) => `${width}%`};
  `,
  Input: styled.input`
    width: 100%;
    height: 40px;
    border: 1px solid rgb(204, 208, 213);
    background-color: rgb(245, 246, 247);
    border-radius: 5px;
    padding: 0 5px;
  `,
  Error: styled.p`
    color: red;
    font-size: 0.65rem;
    text-align: left;

    line-height: 1rem;
    height: 1rem;
    margin-top: 0.1rem;
  `,
};

const Input: FC<Props> = ({ value, setValue, error, width, ...rest }) => {
  const errorText = error ? error : "";
  return (
    <Styles.Container width={width}>
      <Styles.Input value={value} onChange={setValue} {...rest} />
      <Styles.Error>{errorText}</Styles.Error>
    </Styles.Container>
  );
};

export default Input;
