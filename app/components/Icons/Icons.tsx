"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useGlobalContext } from "../../context/store";
import IconContainer from "./IconContainer";

type Props = {};

const Icons = (props: Props) => {
  const { winamp, setWinamp, intExplorer, setIntExplorer, msn, setMsn } =
    useGlobalContext();

  return (
    <div className="flex flex-col gap-6">
      <IconContainer
        idx={1}
        program={intExplorer}
        setProgram={setIntExplorer}
      />
      <IconContainer idx={2} program={winamp} setProgram={setWinamp} />
      <IconContainer idx={3} program={msn} setProgram={setMsn} />
    </div>
  );
};

export default Icons;
