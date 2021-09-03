import React, { ChangeEventHandler } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { Field } from "formik";

import { GENDER } from "types/types";

interface Props {
  setValue: ChangeEventHandler<HTMLInputElement>;
}

const Styles = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  `,
  RadioInput: styled.div`
    height: 36px;
    width: 100px;
    border: 1px solid ${({ theme }) => theme.colors.gray};
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-right: 10px;
  `,
  Row: styled.div`
    display: flex;
  `,
};
const Gender = (props: Props) => {
  const { t } = useTranslation();
  return (
    <Styles.Container>
      <p>{t("gender")}</p>
      <Styles.Row role="group" onChange={props.setValue}>
        <Styles.RadioInput>
          <label>{t("Male")}</label>
          <input
            type="radio"
            name="gender"
            value={GENDER.MALE}
            defaultChecked
          />
        </Styles.RadioInput>
        <Styles.RadioInput>
          <label>{t("Fmale")}</label>
          <input type="radio" name="gender" value={GENDER.FEMALE} />
        </Styles.RadioInput>
      </Styles.Row>
    </Styles.Container>
  );
};

export default Gender;
