import React from "react";
import Details from "./components/Details/Details";
import Nav from "./components/Nav/Nav";
import Search from "./components/Search/Search";
import * as Styles from "./HeaderNavigation.style";
interface Props {}

const HeaderNavigation = (props: Props) => {
  return (
    <Styles.Container>
      <Search />
      <Nav />
      <Details />
    </Styles.Container>
  );
};

export default HeaderNavigation;
