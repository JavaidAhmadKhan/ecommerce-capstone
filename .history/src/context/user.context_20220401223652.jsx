import { createContext } from "react";

// as the actual value we want to access
export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  return <UserContext.Provider>{children}</UserContext.Provider>;
};
