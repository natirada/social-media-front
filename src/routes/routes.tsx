import { FC } from "react";
import { Switch, Route } from "react-router-dom";
import Auth from "screens/Auth/Auth";
import Home from "screens/Home/Home";

import { RoutesName } from "./routesName";

const Routes: FC = () => {
  return (
    <Switch>
      <Route path={RoutesName.AUTH} component={Auth} />
      <Route path={RoutesName.HOME} component={Home} exact />
    </Switch>
  );
};

export default Routes;
