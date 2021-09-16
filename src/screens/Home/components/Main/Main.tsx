import React from "react";
import CreatePost from "./components/CreatePost/CreatePost";
import Posts from "./components/Posts/Posts";
import { Stories } from "./components/Stories/Stories";
import * as Styles from "./Main.style";

interface Props {}

const Main = (props: Props) => {
  return (
    <Styles.Container>
      <Stories />
      <CreatePost />
      <Posts />
    </Styles.Container>
  );
};
export default Main;
