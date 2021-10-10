import React from "react";
import { Route, Switch, useHistory } from "react-router";
import { RoutesName } from "routes/routesName";
import Findfriends from "./components/FindFriends/FindFriends";
import Home from "./components/Home/Home";
import * as Styles from "./Main.style";

interface Props {}

const Main = (props: Props) => {
  const history = useHistory();
  console.log({ history });

  return (
    <Styles.Container>
      <Switch>
        <Route path={RoutesName.FIND_FRIENDS} component={Findfriends} />
        <Route path={RoutesName.ROOT} component={Home} />
      </Switch>
    </Styles.Container>
  );
};
export default Main;
