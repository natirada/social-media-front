import {useMemo} from 'react';
import {BiCommentError} from 'react-icons/bi';
import {FaMoon} from 'react-icons/fa';
import {FiLogOut} from 'react-icons/fi';
import {AiTwotoneSetting, AiOutlineRight , AiFillQuestionCircle} from 'react-icons/ai';
import useAuth from 'hooks/useAuth';

export interface IAction {
    id: number;
    Icon: any,
    title: string;
    extraIcon?: any;
    onClick: () => void;
  }

const useMoreActions = () => {
      const { logout } = useAuth();
      const actions = useMemo<IAction[]>(() => [
        {
          id: 1,
          Icon:  AiTwotoneSetting ,
          title: 'Settings & Privacy',
          extraIcon: AiOutlineRight ,
          onClick: () => {}
        },
        {
          id: 2,
          Icon: AiFillQuestionCircle ,
          title: 'Help & Support',
          extraIcon: AiOutlineRight ,
           onClick: () => {}
        },
        {
          id: 3,
          Icon: FaMoon ,
          title: 'Display & Accessibility',
          extraIcon: AiOutlineRight ,
           onClick: () => {}
        },
        {
          id: 4,
          Icon: FiLogOut ,
          title: 'Log Out',
           onClick: () => {
             console.log('click logout');
             
            logout()
           }
        },
      ],[logout]);

    return {actions}
}


export default useMoreActions;