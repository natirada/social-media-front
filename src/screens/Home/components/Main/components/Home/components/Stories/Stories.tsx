import BaseCard from "common/Card/BaseCard";
import React from "react";
import * as Styles from "./Stories.style";

interface Props {}

export const Stories = (props: Props) => {
  return (
    <Styles.Container>
      <BaseCard width="106px" height="100%">
        <> </>
      </BaseCard>
      <BaseCard width="106px" height="100%">
        <> </>
      </BaseCard>
      <BaseCard width="106px" height="100%">
        <> </>
      </BaseCard>
      <BaseCard width="106px" height="100%">
        <> </>
      </BaseCard>
      <BaseCard width="106px" height="100%">
        <> </>
      </BaseCard>
    </Styles.Container>
  );
};
