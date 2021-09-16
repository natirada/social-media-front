import HeaderNavigation from "screens/Home/components/HeaderNavigation/HeaderNavigation";
import React, { FC } from "react";
import Styles from "./Home.style";
import Contacts from "./components/Contacts/Contacts";
import Main from "./components/Main/Main";
import Menu from "./components/Menu/Menu";

const Home: FC = () => {
  return (
    <Styles.Container>
      <HeaderNavigation />
      <Contacts />
      <Main />
      <Menu />
    </Styles.Container>
  );
};

export default Home;
