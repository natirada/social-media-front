import BaseCard from "common/Card/BaseCard";
import React from "react";
import * as Styles from "./Posts.style";

interface Props {}

const Posts = (props: Props) => {
  return (
    <Styles.Container>
      {new Array(10).fill(0).map((p) => (
        <BaseCard width="100%" height="420px">
          <> </>
        </BaseCard>
      ))}
    </Styles.Container>
  );
};

export default Posts;
