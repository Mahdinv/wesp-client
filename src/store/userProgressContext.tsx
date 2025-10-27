import React, {
  createContext,
  useCallback,
  useState,
  type ReactNode,
} from "react";

type UserProgressContext = {
  progress: string;
  progressData: Record<string, unknown> | null;
  setProgress: (mode: string, data?: Record<string, unknown>) => void;
};

const UserProgressContext = createContext<UserProgressContext>({
  progress: "" /* register || login || reset-password */,
  progressData: {},
  setProgress: () => {},
});

export const UserProgressContextProvider: React.FC<{ children: ReactNode }> = (
  props
) => {
  const [userProgress, setUserProgress] = useState("");
  const [userProgressData, setUserProgressData] = useState<Record<
    string,
    unknown
  > | null>(null);

  const setProgress = useCallback(
    (mode: string, data?: Record<string, unknown>) => {
      setUserProgress(mode);
      setUserProgressData(data ?? null);
    },
    []
  );

  const contextValue = {
    progress: userProgress,
    progressData: userProgressData,
    setProgress,
  };

  return (
    <UserProgressContext.Provider value={contextValue}>
      {props.children}
    </UserProgressContext.Provider>
  );
};

export default UserProgressContext;
