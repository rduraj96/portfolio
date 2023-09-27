"use client";

import React from "react";
import "xp.css/dist/XP.css";
import { useGlobalContext } from "../../../context/store";
import ProgramWindow from "../../Window/ProgramWindow";
import MessengerWindow from "./MessengerWindow";

type Props = {};

const Counter = (props: Props) => {
  const { msn, setMsn } = useGlobalContext();

  return (
    <ProgramWindow program={msn} setProgram={setMsn}>
      <div
        className="window-body"
        style={{
          margin: "0px 3px 3px 3px",
        }}
      >
        <MessengerWindow />
      </div>
    </ProgramWindow>
  );
};
export default Counter;
