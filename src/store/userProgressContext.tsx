import React, {
  createContext,
  useCallback,
  useState,
  type ReactNode,
} from "react";

type UserProgressContext = {
  progress: string;
  showRegister: () => void;
  hiddenRegister: () => void;
  showLogin: () => void;
  hiddenLogin: () => void;
  showForgetPassword: () => void;
  hiddenForgetPassword: () => void;
  showResetPassword: () => void;
  hiddenResetPassword: () => void;
};

const UserProgressContext = createContext<UserProgressContext>({
  progress: "" /* register || login || forget-password */,
  showRegister: () => {},
  hiddenRegister: () => {},
  showLogin: () => {},
  hiddenLogin: () => {},
  showForgetPassword: () => {},
  hiddenForgetPassword: () => {},
  showResetPassword: () => {},
  hiddenResetPassword: () => {},
});

export const UserProgressContextProvider: React.FC<{ children: ReactNode }> = (
  props
) => {
  const [userProgress, setUserProgress] = useState("");

  const showRegister = useCallback(() => {
    setUserProgress("register");
  }, []);
  const hiddenRegister = useCallback(() => {
    setUserProgress("");
  }, []);
  const showLogin = useCallback(() => {
    setUserProgress("login");
  }, []);
  const hiddenLogin = useCallback(() => {
    setUserProgress("");
  }, []);
  const showForgetPassword = useCallback(() => {
    setUserProgress("forget-password");
  }, []);
  const hiddenForgetPassword = useCallback(() => {
    setUserProgress("");
  }, []);
  const showResetPassword = useCallback(() => {
    setUserProgress("reset-password");
  }, []);
  const hiddenResetPassword = useCallback(() => {
    setUserProgress("");
  }, []);

  const contextValue = {
    progress: userProgress,
    showRegister,
    hiddenRegister,
    showLogin,
    hiddenLogin,
    showForgetPassword,
    hiddenForgetPassword,
    showResetPassword,
    hiddenResetPassword,
  };

  return (
    <UserProgressContext.Provider value={contextValue}>
      {props.children}
    </UserProgressContext.Provider>
  );
};

export default UserProgressContext;
