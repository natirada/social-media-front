import React, { FC } from "react";
import { IUser } from "context/UserContext";
import * as Styles from "./People.Style";
import Text from "common/Text/Text";
import { Profile } from "components/Profile/Profile";
import { IoMdPersonAdd } from "react-icons/io";

interface Props extends IUser {
  onClickFrindship: (user: IUser) => void;
}

const People: FC<Props> = (props) => {
  const { onClickFrindship, ...user } = props;
  const { firstName, lastName } = user;

  return (
    <Styles.Container>
      <Styles.Row>
        <Profile />
        <Text>{`${firstName} ${lastName}`}</Text>
      </Styles.Row>
      <Styles.ActionContainer onClick={() => onClickFrindship(user)}>
        <IoMdPersonAdd size={18} />
      </Styles.ActionContainer>
    </Styles.Container>
  );
};

export default People;
