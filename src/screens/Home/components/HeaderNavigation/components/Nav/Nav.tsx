import React, { FC, useState } from "react";
import { ReactComponent as Home } from "assets/icons/home.svg";
import { ReactComponent as Friends } from "assets/icons/friends.svg";
import { ReactComponent as Groups } from "assets/icons/groups.svg";

import * as Styles from "./Nav.Style";
import { useTheme } from "styled-components";

interface Props {}

const Nav: FC = ({}) => {
  const [currTab, setCurrTab] = useState(0);
  const { colors } = useTheme();
  return (
    <Styles.Container>
      <Styles.NavItem onClick={() => setCurrTab(0)}>
        <Home fill={currTab === 0 ? colors.primaryBackground : undefined} />
      </Styles.NavItem>
      <Styles.NavItem onClick={() => setCurrTab(1)}>
        <Friends fill={currTab === 1 ? colors.primaryBackground : undefined} />
      </Styles.NavItem>
      <Styles.NavItem onClick={() => setCurrTab(2)}>
        <Groups fill={currTab === 2 ? colors.primaryBackground : undefined} />
      </Styles.NavItem>
      <Styles.Cursor
        animate={{ x: 130 * currTab }}
        transition={{ type: "just" }}
      />
    </Styles.Container>
  );
};

export default Nav;
