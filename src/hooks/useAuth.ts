import { useCallback, useEffect, useState, useContext } from "react";
import { ApiRequests } from "api/api.endpoints";
import httpService,{ setAxiosHeader } from "api/service.http";
import { UserContext ,ContextType} from "context/UserContext";
import { STATUS_REQ } from "types/types";

const useAuth = () => {
    const [accessToken, setAccessToken] = useState<string| null>(null);
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

    const setUserData = (user: any, accessToken: string) =>  {
        setAccessToken(accessToken)
        setUser(user)
        localStorage.setItem('token', accessToken);
        localStorage.setItem('user', JSON.stringify(user));
    }
    return {login, signup}
};


export default useAuth;