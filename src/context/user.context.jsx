import { createContext, useState, useEffect } from "react";
import { onAuthStateChangedListner } from "../utils/firebase/firebase.utils";

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => {},
  signUpOpen: false,
  setSignUpOpen: () => {},
  loginOpen: false,
  setLoginOpen: () => {},
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [signUpOpen, setSignUpOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListner((user) => {
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    signUpOpen,
    setCurrentUser,
    setSignUpOpen,
    loginOpen,
    setLoginOpen,
  };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
