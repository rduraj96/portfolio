"use client";

import React, { useState } from "react";
import "xp.css/dist/XP.css";
import { useGlobalContext } from "../context/store";
import ProgramWindow from "./Window/ProgramWindow";

type Props = {};

const Counter = (props: Props) => {
  const [count, setCount] = useState(0);
  const { msn, setMsn } = useGlobalContext();

  return (
    <ProgramWindow program={msn} setProgram={setMsn} className="w-[300px]">
      <div className="window-body">
        <p style={{ textAlign: "center" }}>Current count: {count}</p>
        <div className="field-row" style={{ justifyContent: "center" }}>
          <button onClick={() => setCount(count + 1)}>+</button>
          <button onClick={() => setCount(count - 1)}>-</button>
          <button onClick={() => setCount(0)}>0</button>
        </div>
      </div>
    </ProgramWindow>
  );
};
export default Counter;
