declare module 'tooltip-lib' {
  import React from "react";  
  export interface Props {
        position?: 'left' | 'right' | 'top' | 'bottom';
        ToolTipComponent: React.ReactNode;
        children: React.ReactNode;
    };
    export default function Tooltip(props:Props): React.JSXElementConstructor;
}

