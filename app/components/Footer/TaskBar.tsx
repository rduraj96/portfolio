"use client";

import { useGlobalContext } from "@/app/context/store";
import Image from "next/image";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import "xp.css/dist/XP.css";
import TaskbarItem from "./TaskbarItem";

type Props = {};

const getTime = () => {
  const date = new Date();
  let hour = date.getHours();
  let hourPostFix = "AM";
  let min = date.getMinutes().toString();
  if (hour >= 12) {
    hour -= 12;
    hourPostFix = "PM";
  }
  if (hour === 0) {
    hour = 12;
  }
  if (Number(min) < 10) {
    min = "0" + min;
  }
  return `${hour}:${min} ${hourPostFix}`;
};

const TaskBar = (props: Props) => {
  const [time, setTime] = useState(getTime);
  const {
    winamp,
    setWinamp,
    paint,
    setPaint,
    msn,
    setMsn,
    projects,
    setProjects,
    intExplorer,
    setIntExplorer,
  } = useGlobalContext();
  let programList: {
    stateVar: Program;
    stateSet: Dispatch<SetStateAction<Program>>;
  }[] = [
    {
      stateVar: winamp,
      stateSet: setWinamp,
    },
    {
      stateVar: paint,
      stateSet: setPaint,
    },
    {
      stateVar: msn,
      stateSet: setMsn,
    },
    {
      stateVar: projects,
      stateSet: setProjects,
    },
    {
      stateVar: intExplorer,
      stateSet: setIntExplorer,
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      const newTime = getTime();
      newTime !== time && setTime(newTime);
    }, 1000);
    return () => clearInterval(timer);
  }, [time]);

  return (
    <div
      className="fixed bottom-0 left-0 right-0 w-full h-[30px] bg-[#0b77e9]"
      style={{
        boxShadow: `inset 1px 0 1px #18bbff`,
        backgroundColor: "#0b77e9",
        background: `linear-gradient(
          to bottom,
          #1f2f86 0,
          #3165c4 3%,
          #3682e5 6%,
          #4490e6 10%,
          #3883e5 12%,
          #2b71e0 15%,
          #2663da 18%,
          #235bd6 20%,
          #2258d5 23%,
          #2157d6 38%,
          #245ddb 54%,
          #2562df 86%,
          #245fdc 89%,
          #2158d4 92%,
          #1d4ec0 95%,
          #1941a5 98%
        )`,
      }}
    >
      <div className="absolute left-0 bottom-0 hover:brightness-110">
        <Image
          src={"/icons/start.png"}
          alt="start-button"
          width={92}
          height={44}
          className={`cursor-pointer`}
        />
      </div>
      <div className="ml-[100px] py-1 h-full flex justify-start items-center">
        {programList.map(
          (program, i) =>
            program.stateVar.isOpen && (
              <TaskbarItem
                program={program.stateVar}
                setProgram={program.stateSet}
                key={i}
              />
            )
        )}
      </div>
      <div
        className="absolute flex items-center justify-center right-0 bottom-0 h-full w-fit px-2.5 space-x-2 bg-[#0d9aef] border-l-[1px] border-[#1042af]"
        style={{
          background: `linear-gradient(
          to bottom,
          #0c59b9 1%,
          #139ee9 6%,
          #18b5f2 10%,
          #139beb 14%,
          #1290e8 19%,
          #0d8dea 63%,
          #0d9ff1 81%,
          #0f9eed 88%,
          #119be9 91%,
          #1392e2 94%,
          #137ed7 97%,
          #095bc9 100%
        )`,
          boxShadow: `inset 1px 0 1px #18bbff`,
          backgroundColor: `#0b77e9`,
        }}
      >
        <div className="flex gap-1">
          <Image
            src={"/icons/volume.png"}
            alt={"volume-tray-icon"}
            width={16}
            height={16}
          />
          <Image
            src={"/icons/usb.png"}
            alt={"usb-tray-icon"}
            width={16}
            height={16}
          />
          <Image
            src={"/icons/firewall.png"}
            alt={"firewall-tray-icon"}
            width={16}
            height={16}
          />
        </div>
        <div className="text-white whitespace-nowrap text-xs px-1">{time}</div>
      </div>
    </div>
  );
};

export default TaskBar;
