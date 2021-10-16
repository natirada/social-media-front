import { useCallback, useEffect, useState, useContext } from "react";
import { ApiRequests } from "api/api.endpoints";
import httpService,{ setAxiosHeader } from "api/service.http";
import { UserContext ,initialUserState} from "context/UserContext";
import { STATUS_REQ } from "types/types";
import { useHistory } from "react-router";
import { RoutesName } from "routes/routesName";

const useAuth = () => {
    const [accessToken, setAccessToken] = useState<string| null>(null);
    const history = useHistory();
    const [_, setUser] = useContext(UserContext)
    

    useEffect(() => {
        if(accessToken)  setAxiosHeader(accessToken);
    }, [accessToken])
    
    const login =  useCallback(
        async (data: any) => {
            try {
                const res = await httpService.post(ApiRequests.LOGIN, data);
                const { user,accessToken  } = res;
                setUserData(user, accessToken);
                
                return {...user, status: STATUS_REQ.SUCCESS};
            } catch (error) {
                console.log(error);
                return error;
            }
        },
        [],
        )
        
        const signup =  useCallback(
            async (data: any) => {
                try {
                    const res = await httpService.post(ApiRequests.SIGNUP, data);
                    const { user,accessToken  } = res;
                    setUserData(user, accessToken);
                return {...user, status: STATUS_REQ.SUCCESS};
            } catch (error) {
                console.log(error);
                return error;
            }
        },
        [],
    )
    const logout = useCallback(() => {
        setUser(initialUserState)
        localStorage.setItem('token', '');
        localStorage.setItem('user', '');
        history.push(RoutesName.ROOT)
    },[]);

    const setUserData = (user: any, accessToken: string) =>  {
        setAccessToken(accessToken)
        setUser(user)
        localStorage.setItem('token', accessToken);
        localStorage.setItem('user', JSON.stringify(user));

    }


    return {login, signup, logout}
};


export default useAuth;