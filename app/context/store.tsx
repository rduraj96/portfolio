"use client";

import {
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
  useState,
} from "react";

interface ContextProps {
  maxIndex: number;
  setMaxIndex: Dispatch<SetStateAction<number>>;
  runningTasks: Program[];
  setRunningTasks: Dispatch<SetStateAction<Program[]>>;
  winamp: Program;
  setWinamp: Dispatch<SetStateAction<Program>>;
  intExplorer: Program;
  setIntExplorer: Dispatch<SetStateAction<Program>>;
  msn: Program;
  setMsn: Dispatch<SetStateAction<Program>>;
  paint: Program;
  setPaint: Dispatch<SetStateAction<Program>>;
}

const GlobalContext = createContext<ContextProps>({
  maxIndex: 0,
  setMaxIndex: () => {},
  runningTasks: [],
  setRunningTasks: () => {},
  winamp: {
    id: "wp",
    name: "Winamp",
    isOpen: false,
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
  paint: {
    id: "paint",
    name: "Paint",
    isOpen: false,
    isMinimized: false,
    isMaximized: false,
    isFocused: false,
  },
  setPaint: () => {},
});

export const GlobalContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [maxIndex, setMaxIndex] = useState<number>(0);
  const [runningTasks, setRunningTasks] = useState<Program[]>([]);
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
  const [paint, setPaint] = useState<Program>({
    id: "paint",
    name: "Paint",
    isOpen: false,
    isMinimized: false,
    isMaximized: false,
    isFocused: false,
  });

  return (
    <GlobalContext.Provider
      value={{
        maxIndex,
        setMaxIndex,
        runningTasks,
        setRunningTasks,
        winamp,
        setWinamp,
        intExplorer,
        setIntExplorer,
        msn,
        setMsn,
        paint,
        setPaint,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
