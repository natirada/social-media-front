import React from "react";
import Post, { IPost } from "./Post/Post";
import * as Styles from "./Posts.style";
import Spinner from "common/Spinner/Spinner";
import usePostQuery from "./usePostQuery";

interface Props {}

const Posts = (props: Props) => {
  const { posts = [], isLoading } = usePostQuery();

  return (
    <Styles.Container>
      {isLoading && <Spinner />}
      {posts.map((p: IPost) => (
        <Post {...p} />
      ))}
    </Styles.Container>
  );
};

export default Posts;
