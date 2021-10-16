import React, { FC, useState } from "react";
import { useFormik } from "formik";
import { useTranslation } from "react-i18next";
import { loginValidationSchema } from "../../validationSchema";
import Styles from "./Login.style";

interface Props {
  onClickCreateNewAccount: () => void;
  onLogin: (data: any) => void;
}

const Login: FC<Props> = ({ onClickCreateNewAccount, onLogin }) => {
  const { t } = useTranslation();
  const [validateAfterSubmit, setValidateAfterSubmit] = useState(false);
  const { values, handleSubmit, handleChange, errors } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginValidationSchema,
    validateOnChange: validateAfterSubmit,
    onSubmit: onLogin,
  });
  const { email, password } = values;

  const onHandleSubmit = (e?: React.FormEvent<HTMLFormElement> | undefined) => {
    e?.preventDefault();
    setValidateAfterSubmit(true);
    handleSubmit();
  };

  return (
    <form onSubmit={onHandleSubmit}>
      <Styles.Conatiner>
        <Styles.Input
          name="email"
          value={email}
          onChange={handleChange}
          placeholder="email"
        />
        {errors.email && <Styles.ErrorText>{errors.email}</Styles.ErrorText>}
        <Styles.Input
          name="password"
          value={password}
          onChange={handleChange}
          placeholder="password"
        />
        {errors.password && (
          <Styles.ErrorText>{errors.password}</Styles.ErrorText>
        )}
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
