import { setAxiosHeader } from "api/service.http";
import { UserContext } from "context/UserContext";
import { FC, useContext, useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import Auth from "screens/Auth/Auth";
import Home from "screens/Home/Home";

import { RoutesName } from "./routesName";
interface Props {
  token: string;
}
const Routes: FC<Props> = ({ token }) => {
  const [, setUser] = useContext(UserContext);

  useEffect(() => {
    const user = localStorage.getItem("user");
    user && setUser(JSON.parse(user));
    setAxiosHeader(token);
  }, []);

  return (
    <Switch>
      {/* <Route path={RoutesName.AUTH} component={Auth} /> */}
      <Route path={RoutesName.ROOT} component={Home} />
    </Switch>
  );
};

export default Routes;
