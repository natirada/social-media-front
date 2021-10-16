import React, { FC, useEffect } from "react";
import { useAnimation } from "framer-motion";
import * as Styles from "./Spinner.Style";

interface Props {}

const Spinner: FC = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start((i) => {
      return {
        y: 20,

        transition: {
          repeat: Infinity,
          type: "spring",
          repeatType: "reverse",
          delay: i * 0.2,
        },
      };
    });
  }, []);

  return (
    <Styles.Container>
      <Styles.DotsContainer>
        <Styles.Dot custom={0} animate={controls} />
        <Styles.Dot custom={1} animate={controls} />
        <Styles.Dot custom={2} animate={controls} />
      </Styles.DotsContainer>
    </Styles.Container>
  );
};

export default Spinner;
