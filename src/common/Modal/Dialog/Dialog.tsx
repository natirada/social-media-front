import { FC, ReactNode } from "react";
import styled from "styled-components";
import BaseModal from "../BaseModal/BaseModal";
import { VscChromeClose } from "react-icons/vsc";
import Hr from "common/Hr/Hr";

interface Props {
  isVisable: boolean;
  handleClose: () => void;
  children?: ReactNode;
}

const Styles = {
  Container: styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.white};
    width: max(380px, 30vw);
    min-height: 100px;
    border-radius: 8px;
    border: 1px solid gray;
  `,
  Header: styled.div<{
    align: string;
  }>`
    display: flex;
    width: 100%;
    justify-content: ${({ align }) =>
      align === "center" ? "center" : "flex-start"};
    align-items: center;
  `,
  HeaderContainer: styled.div`
    display: flex;
    min-height: 60px;
    width: 100%;
    justify-content: space-around;
    flex-direction: column;
    padding: 0 0.3rem;
  `,
  CloseBtn: styled.button`
    display: flex;
    position: absolute;
    right: 0.3rem;
    top: 0.2rem;
    background-color: ${({ theme }) => theme.colors.lightGray};
    display: flex;
    justify-self: flex-end;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border: none;
    border-radius: 20px;
    &:hover {
      background-color: ${({ theme }) => theme.colors.gray};
      cursor: pointer;
    }
  `,
  Title: styled.p`
    font-family: ${({ theme }) => theme.fontFamilies.Rubik};
    font-weight: 500;
    font-size: 1.1rem;
  `,
  DialogContent: styled.div`
    padding: 0 0.3rem;
    width: 100%;
  `,

  DialogActions: styled.div`
    padding: 0 0.3rem;
    display: flex;
    width: 100%;
    justify-content: flex-end;
  `,
};
const Dialog: FC<Props> = ({ isVisable, handleClose, children }) => {
  return (
    <BaseModal isVisable={isVisable}>
      <Styles.Container>
        <Styles.CloseBtn onClick={handleClose}>
          <VscChromeClose width={50} />
        </Styles.CloseBtn>
        {children}
      </Styles.Container>
    </BaseModal>
  );
};

interface DialogTitleProps {
  children?: ReactNode;
  align?: "center" | "left";
  divider?: boolean;
}
export const DialogTitle: FC<DialogTitleProps> = ({
  children,
  align = "center",
  divider = true,
}) => {
  return (
    <Styles.HeaderContainer>
      <Styles.Header align={align}>
        {typeof children === "string" ? (
          <Styles.Title>{children}</Styles.Title>
        ) : (
          children
        )}
      </Styles.Header>
      {divider && <Hr />}
    </Styles.HeaderContainer>
  );
};

interface DialogContentProps {
  children: ReactNode;
}

export const DialogContent: FC<DialogContentProps> = ({ children }) => {
  return <Styles.DialogContent>{children}</Styles.DialogContent>;
};

interface DialogActionsProps {
  children: ReactNode;
}
export const DialogActions: FC<DialogActionsProps> = ({ children }) => {
  return <Styles.DialogActions>{children}</Styles.DialogActions>;
};

export default Dialog;
