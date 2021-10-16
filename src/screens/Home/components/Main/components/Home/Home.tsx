import React, { FC } from "react";
import CreatePost from "./components/CreatePost/CreatePost";
import Posts from "./components/Posts/Posts";
import { Stories } from "./components/Stories/Stories";

interface Props {}

const Home: FC = () => {
  return (
    <>
      <Stories />
      <CreatePost />
      <Posts />
    </>
  );
};

export default Home;
