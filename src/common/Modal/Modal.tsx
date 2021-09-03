import React, { ReactElement } from "react";
import Styles from "./Modal.style";

interface Props {
	isVisable: boolean;
	children: ReactElement;
}

export const Modal = ({ isVisable, children }: Props) => {
	return isVisable ? <Styles.Container>{children}</Styles.Container> : null;
};
