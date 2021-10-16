import React, { FC, ChangeEvent} from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { getDaysInMonth, monthsName } from "../../../../../../utiles/dates";

interface Props {
  date: Date;
  setDate: (val: Date) => void;
}

const Styles = {
  Container: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  `,
  Row: styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
  `,
  Select: styled.select`
    width: 30%;
    background-color: ${({ theme }) => theme.colors.white};
    border: 1px solid ${({ theme }) => theme.colors.gray};
    height: 36px;
  `,
};

const PREVIOUS_YEARS = 120;

const Birthday: FC<Props> = ({ date, setDate }) => {
  const { t } = useTranslation();
  const month = date.getMonth();
  const fullYear = date.getFullYear();
  const daysInMonth = getDaysInMonth({ month, year: fullYear });
  const diffYears = fullYear - PREVIOUS_YEARS;
  const yearsRange = new Array(PREVIOUS_YEARS)
    .fill(0)
    .map((n, i) => i + 1 + diffYears);

  const onClickMonth = (e: ChangeEvent<HTMLSelectElement>) => {
    date.setMonth(Number(e.target.value));
    setDate(new Date(date));
  };

  const onClickDays = (e: ChangeEvent<HTMLSelectElement>) => {
    date.setDate(Number(e.target.value));
    setDate(new Date(date));
  };

  const onClickYear = (e: ChangeEvent<HTMLSelectElement>) => {
    date.setFullYear(Number(e.target.value));
    setDate(new Date(date));
  };

  return (
    <Styles.Container>
      <p>{t("birthday")}</p>
      <Styles.Row>
        <Styles.Select name="months" id="months" onChange={onClickMonth}>
          {monthsName.map((mounthName, index) => (
            <option key={mounthName} selected={index === month} value={index}>
              {t(mounthName)}
            </option>
          ))}
        </Styles.Select>
        <Styles.Select name="days" id="days" onChange={onClickDays}>
          {new Array(daysInMonth).fill(null).map((_, index) => {
            const day = index + 1;
            return (
              <option key={day} value={day} selected={day === date.getDate()}>
                {day}
              </option>
            );
          })}
        </Styles.Select>
        <Styles.Select name="years" id="years" onChange={onClickYear}>
          {yearsRange.map((year) => (
            <option key={year} value={year} selected={year === fullYear}>
              {year}
            </option>
          ))}
        </Styles.Select>
      </Styles.Row>
    </Styles.Container>
  );
};
export default Birthday;
