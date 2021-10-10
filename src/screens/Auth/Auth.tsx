import React, { useCallback, useState } from "react";
import httpService, { setAxiosHeader } from "api/service.http";
import { useHistory } from "react-router-dom";
import { ApiRequests } from "api/api.endpoints";
import BaseModal from "common/Modal/BaseModal/BaseModal";
import Styles from "./Auth.style";
import Login from "./components/LogIn/Login";
import { Signup } from "./components/Signup/Signup";
import { RoutesName } from "routes/routesName";
import useAuth from "hooks/useAuth";
import { STATUS_REQ } from "types/types";

const Auth = () => {
  const history = useHistory();
  const [isSignupModalVisable, setIsSignupModalVisable] = useState(false);
  const { login, signup } = useAuth();
  const onClickCreateNewAccount = useCallback(() => {
    setIsSignupModalVisable(true);
  }, []);

  const onSubmitLogin = async (data: any) => {
    const res = await login(data);
    console.log(res);

    if (res.status === STATUS_REQ.SUCCESS) {
      history.push(RoutesName.ROOT);
    }
  };

  const onSubmitSignUp = async (data: any) => {
    const res = await signup(data);
    if (res) history.push(RoutesName.ROOT);
  };

  return (
    <Styles.Container>
      <Styles.Body>
        <Styles.GridContianer>
          <Styles.GridItem>
            <Styles.Logo
              src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg"
              alt=""
            />
            <p style={{ fontSize: 18 }}>
              Connect with friends and the world around you on Facebook.
            </p>
          </Styles.GridItem>
          <Styles.GridItem>
            <Login
              onClickCreateNewAccount={onClickCreateNewAccount}
              onLogin={onSubmitLogin}
            />
          </Styles.GridItem>
        </Styles.GridContianer>
      </Styles.Body>
      <Styles.Footer />

      <BaseModal isVisable={isSignupModalVisable}>
        <Signup
          onClocs={() => setIsSignupModalVisable(false)}
          onSubmit={onSubmitSignUp}
        />
      </BaseModal>
    </Styles.Container>
  );
};

export default Auth;
