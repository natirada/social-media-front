import React, { FC } from 'react';
import { IUser } from 'context/UserContext';
import * as Styles from './FriendRequest.Style';
import { Profile } from 'components/Profile/Profile';
import BaseBtn from 'common/Buttons/BaseBtn';
import Text from 'common/Text/Text';
import Button from 'common/Buttons/Button';

interface Props {
  onConfirm: () => void;
  onDelete: () => void;
  userRequest: IUser;
  dateSending: Date;
}

const FriendRequest: FC<Props> = ({
  onConfirm,
  onDelete,
  userRequest,
  dateSending,
}) => {
  return (
    <Styles.Container>
      <Styles.Body>
        <Profile />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
          }}
        >
          <Text>{`${userRequest.firstName} sent you a friend request`}</Text>
          <Text display="block" fontSize="0.8rem">{`3 day ago`}</Text>
        </div>
      </Styles.Body>
      <Styles.Fotter>
        <Button text="Confirm" />
        <Button text="Delete" btnType="secondary" />
      </Styles.Fotter>
    </Styles.Container>
  );
};

export default FriendRequest;
