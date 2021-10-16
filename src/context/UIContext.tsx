import React, { createContext, FC, useState } from "react";

type Action = {type: 'increment'} | {type: 'decrement'}
type Dispatch = (action: Action) => void

export interface UIState {
    showHeaderMenu: boolean;
}

export const initialUserState: UIState = {
    showHeaderMenu: false
};

export type ContextType = [UIState | null, (uiState: UIState) => void];

const UIContext = createContext<
ContextType | undefined
>(undefined)


// UIContext.displayName = 'uiState';

const UIProvider: FC = ({ children }) => {
  const [UI, setUI] = useState<UIState>(initialUserState);
  const value:ContextType  = [UI, setUI];

  
  return (
      <UIContext.Provider value={value}>
          {children}
      </UIContext.Provider>
  )
};

export default UIProvider;
