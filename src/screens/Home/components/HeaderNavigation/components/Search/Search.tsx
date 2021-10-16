import React, { FC,  useState } from "react";
import * as Styles from "./Search.Style";
import { facebookUrlImage } from "assets";
import { BiArrowBack } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";
import Text from "common/Text/Text";
import useUsersByName from "hooks/useUsersByName";
import { IUser } from "context/UserContext";
import { useHistory } from "react-router";
import { RoutesName } from "routes/routesName";

interface Props {}



const Search: FC = () => {
  const history = useHistory();
  const [isInputFoucs, setisInputFoucs] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { users, isLoading } = useUsersByName(searchQuery);

  const onPressUser = (user: IUser) => {
    setSearchQuery("");
    history.push(RoutesName.FIND_FRIENDS);
  };

  return (
    <Styles.Container>
      <Styles.LeftContainer>
        <Styles.FacebookLogo
          src={facebookUrlImage}
          animate={{ x: isInputFoucs ? -10 : 0, opacity: isInputFoucs ? 0 : 1 }}
        />
        <Styles.BackContainer
          animate={{ x: isInputFoucs ? -10 : 0, opacity: isInputFoucs ? 1 : 0 }}
        >
          <BiArrowBack size={20} />
        </Styles.BackContainer>
      </Styles.LeftContainer>
      <Styles.InputContainer>
        <Styles.IconSerarhcContainer
          animate={{ x: isInputFoucs ? -10 : 0, opacity: isInputFoucs ? 0 : 1 }}
        >
          <AiOutlineSearch size={20} />
        </Styles.IconSerarhcContainer>
        <Styles.Input
          onFocus={(e) => setisInputFoucs(true)}
          onBlur={(e) => setisInputFoucs(false)}
          placeholder="Serach Facebook"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          animate={{
            width: isInputFoucs ? "100%" : 200,

            x: isInputFoucs ? -30 : 0,
          }}
        />
      </Styles.InputContainer>
      <Styles.SuggstionList
        animate={{
          height: users.length * 60 + 50 + 40,
          opacity: isInputFoucs ? 1 : 0,
        }}
      >
        {users.length === 0 ? (
          <div style={{ height: 40 }}>
            <Text>No Users Found</Text>
          </div>
        ) : (
          users.map((user: IUser) => (
            <Styles.User key={user._id} onClick={() => onPressUser(user)}>
              <Styles.Icon>
                <AiOutlineSearch size={20} />
              </Styles.Icon>
              <Text>{`${user.firstName} ${user.lastName}`}</Text>
            </Styles.User>
          ))
        )}
      </Styles.SuggstionList>
    </Styles.Container>
  );
};

export default Search;
