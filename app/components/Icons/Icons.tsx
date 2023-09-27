"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useGlobalContext } from "../../context/store";
import IconContainer from "./IconContainer";

type Props = {};

const Icons = (props: Props) => {
  const {
    winamp,
    setWinamp,
    intExplorer,
    setIntExplorer,
    msn,
    setMsn,
    paint,
    setPaint,
    projects,
    setProjects,
  } = useGlobalContext();

  return (
    <div className="flex flex-col gap-6">
      <IconContainer program={intExplorer} setProgram={setIntExplorer} />
      <IconContainer program={winamp} setProgram={setWinamp} />
      <IconContainer program={msn} setProgram={setMsn} />
      <IconContainer program={paint} setProgram={setPaint} />
      <IconContainer program={projects} setProgram={setProjects} />
    </div>
  );
};

export default Icons;
