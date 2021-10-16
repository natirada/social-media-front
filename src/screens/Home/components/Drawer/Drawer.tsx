import { Profile } from "components/Profile/Profile";
import React,{ FC } from "react";
import * as Styles from "./Drawer.style";
import { FaAngleDown } from "react-icons/fa";
import { RoutesName } from "routes/routesName";
import { useHistory } from "react-router";

// interface Props {}

interface IMenu {
  id: number;
  name: string;
  srcIcon: string;
  linkTo: RoutesName;
}

const menu: IMenu[] = [
  {
    id: 1,
    name: "Find Friends",
    srcIcon: "https://static.xx.fbcdn.net/rsrc.php/v3/y8/r/S0U5ECzYUSu.png",
    linkTo: RoutesName.FIND_FRIENDS,
  },
  {
    id: 2,
    name: "Welcome",
    srcIcon: "https://static.xx.fbcdn.net/rsrc.php/v3/yI/r/k0tRiO8UGxF.png",
    linkTo: RoutesName.ROOT,
  },
  {
    id: 3,
    name: "Groups",
    srcIcon: "https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/PrjLkDYpYbH.png",
    linkTo: RoutesName.ROOT,
  },
  {
    id: 4,
    name: "Marketplace",
    srcIcon: "https://static.xx.fbcdn.net/rsrc.php/v3/yU/r/D2y-jJ2C_hO.png",
    linkTo: RoutesName.ROOT,
  },
  {
    id: 5,
    name: "Watch",
    srcIcon: "https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/duk32h44Y31.png",
    linkTo: RoutesName.ROOT,
  },
  {
    id: 6,
    name: "Memories",
    srcIcon: "https://static.xx.fbcdn.net/rsrc.php/v3/y8/r/he-BkogidIc.png",
    linkTo: RoutesName.ROOT,
  },
  {
    id: 7,
    name: "Saved",
    srcIcon: "https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/lVijPkTeN-r.png",
    linkTo: RoutesName.ROOT,
  },
  {
    id: 8,
    name: "Pages",
    srcIcon: "https://static.xx.fbcdn.net/rsrc.php/v3/yH/r/kyCAf2jbZvF.png",
    linkTo: RoutesName.ROOT,
  },
  {
    id: 9,
    name: "Events",
    srcIcon: "https://static.xx.fbcdn.net/rsrc.php/v3/ys/r/8wTx0Eu2vRq.png",
    linkTo: RoutesName.ROOT,
  },
  {
    id: 10,
    name: "Jobs",
    srcIcon: "https://static.xx.fbcdn.net/rsrc.php/v3/yo/r/DO-SN-shaZL.png",
    linkTo: RoutesName.ROOT,
  },
];

const Drawer: FC = (props) => {
  const history = useHistory();
  const onPressItem = (item: IMenu) => history.push(item.linkTo);

  return (
    <Styles.Container>
      <Styles.BtnContainer>
        <Styles.Margin>
          <Profile />
        </Styles.Margin>
        <Styles.menuName>Netanel Rada</Styles.menuName>
      </Styles.BtnContainer>
      {menu.map((m) => (
        <Styles.BtnContainer key={m.id} onClick={() => onPressItem(m)}>
          <Styles.Icon src={m.srcIcon} />
          <Styles.menuName>{m.name}</Styles.menuName>
        </Styles.BtnContainer>
      ))}
      <Styles.BtnContainer>
        <Styles.SeeMore>
          <FaAngleDown size={18} />
        </Styles.SeeMore>
        <Styles.menuName>See More</Styles.menuName>
      </Styles.BtnContainer>
    </Styles.Container>
  );
};

export default Drawer;
