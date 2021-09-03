import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import Styles from "./Login.style";

interface Props {
	onClickCreateNewAccount: () => void;
}

const Login: FC<Props> = ({ onClickCreateNewAccount }) => {
	const { t } = useTranslation();
	return (
		<form>
			<Styles.Conatiner>
				<Styles.Input placeholder="email" />
				<Styles.Input placeholder="password" />
				<Styles.SubmitBtn type="submit">{t("login")}</Styles.SubmitBtn>
				<Styles.link href="/">{t("forgotPassword")}</Styles.link>
				<Styles.Hr />
				<Styles.SignupBtn type="button" onClick={onClickCreateNewAccount}>
					{t("createNewAccount")}
				</Styles.SignupBtn>
			</Styles.Conatiner>
		</form>
	);
};

export default Login;
