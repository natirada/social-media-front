import React, { FC, useState } from "react";
import { useTranslation } from "react-i18next";
import { Form, Formik, useFormik } from "formik";
import { AiOutlineClose } from "react-icons/ai";
import Birthday from "./components/Birthday/Birthday";
import Gender from "./components/Gender/Gender";
import Input from "./components/Input/Input";

import { GENDER } from "types/types";

import Styles from "./Signup.style";
import signupValidationSchema from "./validationSchema";

interface Props {
  onClocs: () => void;
  onSubmit: (data: any) => void;
}
interface IFormsValue {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  birthday: Date;
  gender: GENDER | null;
}
export const Signup: FC<Props> = ({ onClocs, onSubmit }) => {
  const { t } = useTranslation();
  const { values, handleSubmit, handleChange, setFieldValue, errors } =
    useFormik({
      initialValues: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        birthday: new Date(),
        gender: "Male",
      },
      validationSchema: signupValidationSchema,
      onSubmit: (values) => {
        alert(JSON.stringify(values, null, 2));
      },
    });
  const { firstName, lastName, email, password, birthday, gender } = values;

  console.log(errors);

  return (
    <form onSubmit={handleSubmit}>
      <Styles.Container>
        <Styles.Header>
          <Styles.Column>
            <Styles.Title>{t("signup")}</Styles.Title>
            <p>{t("quickAndEasy")}</p>
          </Styles.Column>
          <Styles.CloseBtn onClick={onClocs}>
            <AiOutlineClose size={28} />
          </Styles.CloseBtn>
        </Styles.Header>
        <Styles.Hr />
        <Styles.Row>
          <Input
            value={firstName}
            name="firstName"
            setValue={handleChange}
            width={47}
            placeholder={t("firstName")}
            error={errors.firstName}
          />
          <Input
            name="lastName"
            value={lastName}
            setValue={handleChange}
            width={47}
            placeholder={t("lastName")}
            error={errors.lastName}
          />
        </Styles.Row>
        <Input
          name="email"
          value={email}
          setValue={handleChange}
          placeholder={t("email")}
          error={errors.email}
        />
        <Input
          name="password"
          value={password}
          setValue={handleChange}
          placeholder={t("newPassword")}
          error={errors.password}
        />
        <Birthday
          date={birthday}
          setDate={(val: Date) => {
            setFieldValue("birthday", val);
          }}
        />
        <Gender setValue={handleChange} />
        <Styles.SignupBtn type="submit">{t("signup")}</Styles.SignupBtn>
      </Styles.Container>
    </form>
  );
};
