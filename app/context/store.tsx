"use client";

import {
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
  useState,
} from "react";

type ProgramType = {
  name: string;
  isOpen: boolean;
  isMinimized: boolean;
  isMaximized: boolean;
  isFocused: boolean;
};

interface ContextProps {
  winamp: ProgramType;
  setWinamp: Dispatch<SetStateAction<ProgramType>>;
}

const GlobalContext = createContext<ContextProps>({
  winamp: {
    name: "winamp",
    isOpen: false,
    isMinimized: false,
    isMaximized: false,
    isFocused: false,
  },
  setWinamp: () => {},
});

export const GlobalContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [winamp, setWinamp] = useState<ProgramType>({
    name: "winamp",
    isOpen: false,
    isMinimized: false,
    isMaximized: false,
    isFocused: false,
  });

  return (
    <GlobalContext.Provider value={{ winamp, setWinamp }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
