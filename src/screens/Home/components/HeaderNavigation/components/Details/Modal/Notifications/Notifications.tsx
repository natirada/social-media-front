import React, { FC } from 'react';
import * as Styles from './Notifications.Style';
import Text from 'common/Text/Text';
import useFriendRequests from './hooks/useFriendRequests';
import Friendrequest from './components/FriendRequest/FriendRequest';

// interface Props {}

const Notifications: FC = () => {
  const { frindesRequests } = useFriendRequests();
  return (
    <Styles.Container>
      <Styles.Header>
        <Text fontSize="1.2rem" fontWeight={500}>
          Notifications
        </Text>
      </Styles.Header>
      <Text fontSize="1.1rem">Frineds Requests</Text>
      {frindesRequests.map((request, i) => (
        <Friendrequest
          key={i}
          onConfirm={() => {}}
          onDelete={() => {}}
          dateSending={new Date()}
          userRequest={{
            _id: '6133a20a256618239412b5f0',
            firstName: 'Nati',
            lastName: 'Rada',
            email: 'nati94326@gmail.com',
            birthday: new Date('1991-04-20T16:42:16.602Z'),
            gender: 'Male',
          }}
        />
      ))}
      <Text fontSize="1.1rem">Earlier</Text>
    </Styles.Container>
  );
};

export default Notifications;
