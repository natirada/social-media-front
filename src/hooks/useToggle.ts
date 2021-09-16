import { useState } from "react";


const useToggle = (defalueValue: boolean):[boolean, any] => {
    const [value, setValue] = useState(defalueValue);

    const setToggle = (newValue?: boolean) => {
        if(typeof newValue === 'boolean' ) setValue(newValue);
        else setValue(preValue => !preValue);
    }

    return [value, setToggle]
};

export default useToggle;