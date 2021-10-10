import React, { FC, useContext } from "react";
import { Profile } from "components/Profile/Profile";
import { UserContext } from "context/UserContext";
import Text from "common/Text/Text";
import * as Styles from "./More.Style";

interface Props {}

const More: FC = ({}) => {
  const [user] = useContext(UserContext);
  return (
    <Styles.Container>
      <Styles.Item>
        <Profile />
        <div>
          <Text textAlign="left">{user?.firstName}</Text>
          <Text fontSize="0.8rem">See your profile</Text>
        </div>
      </Styles.Item>
      <Styles.Item>
        <Profile />
        <div>
          <Text textAlign="left">{user?.firstName}</Text>
          <Text fontSize="0.8rem">See your profile</Text>
        </div>
      </Styles.Item>
    </Styles.Container>
  );
};

export default More;
