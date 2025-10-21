import React, { createContext, useState, type ReactNode } from "react";

const UserProgressContext = createContext({
  progress: "" /* register Or login */,
  showRegister: () => {},
  hiddenRegister: () => {},
  showLogin: () => {},
  hiddenLogin: () => {},
});

export const UserProgressContextProvider: React.FC<{ children: ReactNode }> = (
  props
) => {
  const [userProgress, setUserProgress] = useState("");

  function showRegister() {
    setUserProgress("register");
  }
  function hiddenRegister() {
    setUserProgress("");
  }
  function showLogin() {
    setUserProgress("login");
  }
  function hiddenLogin() {
    setUserProgress("");
  }

  const contextValue = {
    progress: userProgress,
    showRegister,
    hiddenRegister,
    showLogin,
    hiddenLogin,
  };

  return (
    <UserProgressContext.Provider value={contextValue}>
      {props.children}
    </UserProgressContext.Provider>
  );
};

export default UserProgressContext;
