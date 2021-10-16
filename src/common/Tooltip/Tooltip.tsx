import React, { FC } from "react";
import * as Styles from "./Tooltip.Style";
import TooltipLib from "tooltip-lib";
import Text from "common/Text/Text";

interface Props {
  content: string;
}

const Tooltip: FC<Props> = ({ content, children }) => {
  return (
    <TooltipLib
      ToolTipComponent={
        <Styles.Container>
          <Text color="white">{content}</Text>
        </Styles.Container>
      }
    >
      {children}
    </TooltipLib>
  );
};

export default Tooltip;
