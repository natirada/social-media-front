import HeaderNavigation from "screens/Home/components/HeaderNavigation/HeaderNavigation";
import React, { FC, useContext, useEffect } from "react";
import Styles from "./Home.style";
import Contacts from "./components/Contacts/Contacts";
import Main from "./components/Main/Main";
import Menu from "./components/Drawer/Drawer";
import { UserContext } from "context/UserContext";
import { socket } from "socket/socket";
import UIProvider from "context/UIContext";

const Home: FC = () => {
  const [user] = useContext(UserContext);

  useEffect(() => {
    if (user) {
      const io = socket.getIO();
      io.emit("join-room", user._id);
    }
  }, [user]);
  return (
    <UIProvider>
    <Styles.Container>
      <HeaderNavigation />
      <Contacts />
      <Main />
      <Menu />
    </Styles.Container>
    </UIProvider>
  );
};

export default Home;
