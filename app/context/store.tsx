"use client";

import {
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
  useState,
} from "react";

interface ContextProps {
  winamp: Program;
  setWinamp: Dispatch<SetStateAction<Program>>;
  intExplorer: Program;
  setIntExplorer: Dispatch<SetStateAction<Program>>;
  msn: Program;
  setMsn: Dispatch<SetStateAction<Program>>;
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
  intExplorer: {
    name: "ie",
    isOpen: false,
    isMinimized: false,
    isMaximized: false,
    isFocused: false,
  },
  setIntExplorer: () => {},
  msn: {
    name: "msn",
    isOpen: false,
    isMinimized: false,
    isMaximized: false,
    isFocused: false,
  },
  setMsn: () => {},
});

export const GlobalContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [winamp, setWinamp] = useState<Program>({
    name: "winamp",
    isOpen: false,
    isMinimized: false,
    isMaximized: false,
    isFocused: false,
  });
  const [intExplorer, setIntExplorer] = useState<Program>({
    name: "ie",
    isOpen: false,
    isMinimized: false,
    isMaximized: false,
    isFocused: false,
  });
  const [msn, setMsn] = useState<Program>({
    name: "msn",
    isOpen: false,
    isMinimized: false,
    isMaximized: false,
    isFocused: false,
  });

  return (
    <GlobalContext.Provider
      value={{ winamp, setWinamp, intExplorer, setIntExplorer, msn, setMsn }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
