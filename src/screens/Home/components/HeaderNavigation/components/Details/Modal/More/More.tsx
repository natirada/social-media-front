import React, { FC, useContext , ReactNode} from "react";
import { Profile } from "components/Profile/Profile";
import { UserContext } from "context/UserContext";
  import {BiCommentError} from 'react-icons/bi';
import Text from "common/Text/Text";
import Hr from "common/Hr/Hr";
import * as Styles from "./More.Style";
import useMoreActions from "./useMoreAction";

interface Props {}

interface IAction {
  id: number;
  Icon: any,
  title: string;
  extraIcon?: any;
  onClick: () => void;
}


const Action: FC<IAction> = ({Icon ,title, onClick , extraIcon}) => {
  return <Styles.Item onClick={onClick}>
    <Styles.IconContainer>
    {React.createElement(Icon, {key: 'icon' , size: 18})}
    </Styles.IconContainer>
      <Text textAlign="left" fontWeight={400} >{title}</Text>
      <Styles.ExtraIconContainer>
        {extraIcon && React.createElement(extraIcon, {key: 'extraIcon' , size: 18})}
      </Styles.ExtraIconContainer>
  </Styles.Item>
};

const More: FC = () => {
  const {actions} = useMoreActions();
  const [user] = useContext(UserContext);
  return (
    <Styles.Container>
      <Styles.Item>
        <Profile size={70}/>
        <div>
          <Text textAlign="left" fontWeight={500} >{user?.firstName}</Text>
          <Text fontSize="0.8rem">See your profile</Text>
        </div>
      </Styles.Item>
      <Hr />
      <Styles.Item>
        <Styles.IconContainer>
          <BiCommentError />
        </Styles.IconContainer>
        <div>
          <Text textAlign="left">Give Feedback</Text>
          <Text fontSize="0.8rem">Help us improve the new Facebook</Text>
        </div>
      </Styles.Item>
      <Hr />
      {actions.map(a => <Action key={a.id} {...a}/>)}
    </Styles.Container>
  );
};

export default More;
