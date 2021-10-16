import React, { FC, useEffect, useState } from "react";
import { getUserByName } from "api/my-api";
import BaseCard from "common/Card/BaseCard";
import Text from "common/Text/Text";
import { IUser } from "context/UserContext";
import { useMutation } from "react-query";
import * as Styles from "./FindFriends.Style";
import People from "./People/People";
import { sendFriendship } from "api/my-api";

interface Props {}

const Findfriends: FC = () => {
  const [people, setPeople] = useState<IUser[]>([]);
  const mutaion = useMutation(sendFriendship);

  useEffect(() => {
    getUserByName("R").then((res) => setPeople(res.users));
  }, []);

  return (
    <Styles.Container>
      <BaseCard width="100%">
        <Styles.PeoplesContainer>
          <Text fontWeight={500} fontSize="1.2rem">
            People
          </Text>
          {people.map((p) => (
            <People
              key={p._id}
              {...p}
              onClickFrindship={(toUser) => mutaion.mutate({ toUser })}
            />
          ))}
        </Styles.PeoplesContainer>
      </BaseCard>
    </Styles.Container>
  );
};

export default Findfriends;
