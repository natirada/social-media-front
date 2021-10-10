import { useQuery } from "react-query";
import { getUserByName } from 'api/my-api';
import useDebounce from "./useDebounce";

const useUsersByName = (searchQuery: string) => {
 const debouncedValue = useDebounce(searchQuery, 300);
  const { data: users = [], ...rest } =   useQuery(
        ["getUsersByName", debouncedValue],
       () => getUserByName(debouncedValue),
       {select: (data) => data?.users}
      );


    return {users, ...rest}
};


export default useUsersByName;