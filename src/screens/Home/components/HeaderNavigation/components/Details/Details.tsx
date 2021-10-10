import React, { FC, useContext, useEffect, useState } from "react";
import Text from "common/Text/Text";
import { Profile } from "components/Profile/Profile";
import { ReactComponent as Imessanger } from "assets/icons/imessanger.svg";
import { ReactComponent as Notification } from "assets/icons/notification.svg";
import { FaAngleDown } from "react-icons/fa";
import Tooltip from "common/Tooltip/Tooltip";
import * as Styles from "./Details.Style";
import { socket } from "socket/socket";
import { UserContext } from "context/UserContext";
import More from "./Modal/More/More";
import Messangers from "./Modal/Messangers/Messangers";
import Notifications from "./Modal/Notifications/Notifications";

enum MODAL_OPTION {
  MESSANGERS,
  NOTIFICATIONS,
  MORE,
}

interface Props {}

const Details: FC = ({}) => {
  const [user] = useContext(UserContext);
  const [currentModal, setCurrentModal] = useState<null | MODAL_OPTION>(null);
  const [notificationCounter, setNotificationCounter] = useState(0);

  useEffect(() => {
    if (user?._id) {
      const io = socket.getIO();
      const room = `notification:${user?._id}`;
      console.log({ room });

      io.on("notification", (notification: any) => {
        setNotificationCounter((pre) => pre + 1);
      });
    }
  }, [user]);
  const renderCurModal = () => {
    switch (currentModal) {
      case MODAL_OPTION.MESSANGERS:
        return <Messangers />;
      case MODAL_OPTION.NOTIFICATIONS:
        return <Notifications />;
      case MODAL_OPTION.MORE:
        return <More />;
      default:
        return null;
    }
  };

  return (
    <Styles.Container>
      <Tooltip content="myprofile">
        <Styles.MyProfile>
          <Profile />
          <Text>{user?.firstName}</Text>
        </Styles.MyProfile>
      </Tooltip>
      <Tooltip content="massengers">
        <Styles.Action onClick={() => setCurrentModal(MODAL_OPTION.MESSANGERS)}>
          <Imessanger />
        </Styles.Action>
      </Tooltip>
      <Tooltip content="notification">
        <Styles.Action
          onClick={() => setCurrentModal(MODAL_OPTION.NOTIFICATIONS)}
        >
          <Styles.NotificationCounter
            animate={{ scale: !!notificationCounter ? 1 : 0 }}
          >
            <Text fontSize="0.8rem" color="white">
              {notificationCounter}
            </Text>
          </Styles.NotificationCounter>
          <Notification />
        </Styles.Action>
      </Tooltip>
      <Tooltip content="more">
        <Styles.Action onClick={() => setCurrentModal(MODAL_OPTION.MORE)}>
          <FaAngleDown size={18} />
        </Styles.Action>
      </Tooltip>
      <Styles.Modal>{renderCurModal()}</Styles.Modal>
    </Styles.Container>
  );
};

export default Details;
