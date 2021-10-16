import React, { createContext, FC, useState } from 'react';

export interface IUser {
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  _id: string;
  birthday?: Date;
  image?: string;
}

export const initialUserState: IUser = {
  email: '',
  firstName: '',
  lastName: '',
  gender: '',
  _id: '',
};
export type ContextType = [IUser | null, (user: IUser) => void];

export const UserContext = createContext([null, user => {}] as ContextType);

UserContext.displayName = 'user';

const UserProvider: FC = ({ children }) => {
  const [user, setUser] = useState<IUser>(initialUserState);
  const value: ContextType = [user, setUser];

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserProvider;
