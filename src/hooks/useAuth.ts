import { ApiRequests } from "api/api.endpoints";
import httpService,{ setAxiosHeader } from "api/service.http";
import { useCallback, useEffect, useState } from "react";
import { STATUS_REQ } from "types/types";


const useAuth = () => {
    const [accessToken, setAccessToken] = useState(null);

    useEffect(() => {
        if(accessToken)  setAxiosHeader(accessToken);
    }, [accessToken])
    
    const login =  useCallback(
        async (data: any) => {
            try {
                const res = await httpService.post(ApiRequests.LOGIN, data);
                const { user,accessToken  } = res;
                setAccessToken(accessToken)

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
                setAccessToken(accessToken)

                return {...user, status: STATUS_REQ.SUCCESS};
            } catch (error) {
                console.log(error);
                return error;
            }
        },
        [],
    )

    return {login, signup}
};


export default useAuth;