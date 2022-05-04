
import { createContext,useState } from "react";

// as the actual value we want to access
export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null)
  return <UserContext.Provider value={}>{children}</UserContext.Provider>;
};
