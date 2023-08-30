"use client";

import {
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
  useState,
} from "react";
import { defaultProgamState } from "./data";

interface ContextProps {
  focused: string;
  setFocused: Dispatch<SetStateAction<string>>;
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
  focused: "",
  setFocused: (string) => {},
  winamp: defaultProgamState.winamp,
  setWinamp: () => {},
  intExplorer: defaultProgamState.intExplorer,
  setIntExplorer: () => {},
  msn: defaultProgamState.msn,
  setMsn: () => {},
  paint: defaultProgamState.paint,
  setPaint: () => {},
});

export const GlobalContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [focused, setFocused] = useState<string>("");
  const [winamp, setWinamp] = useState<Program>(defaultProgamState.winamp);
  const [intExplorer, setIntExplorer] = useState<Program>(
    defaultProgamState.intExplorer
  );
  const [msn, setMsn] = useState<Program>(defaultProgamState.msn);
  const [paint, setPaint] = useState<Program>(defaultProgamState.paint);

  return (
    <GlobalContext.Provider
      value={{
        focused,
        setFocused,
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
