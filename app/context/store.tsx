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
    id: "wp",
    name: "Winamp",
    isOpen: true,
    isMinimized: false,
    isMaximized: false,
    isFocused: false,
  },
  setWinamp: () => {},
  intExplorer: {
    id: "ie",
    name: "Internet Explorer",
    isOpen: false,
    isMinimized: false,
    isMaximized: false,
    isFocused: false,
  },
  setIntExplorer: () => {},
  msn: {
    id: "msn",
    name: "Messenger",
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
    id: "wp",
    name: "Winamp",
    isOpen: false,
    isMinimized: false,
    isMaximized: false,
    isFocused: false,
  });
  const [intExplorer, setIntExplorer] = useState<Program>({
    id: "ie",
    name: "Internet Explorer",
    isOpen: false,
    isMinimized: false,
    isMaximized: false,
    isFocused: false,
  });
  const [msn, setMsn] = useState<Program>({
    id: "msn",
    name: "Messenger",
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
