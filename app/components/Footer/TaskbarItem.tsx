"use client";

import { useGlobalContext } from "@/app/context/store";
import Image from "next/image";
import React, { Dispatch, SetStateAction } from "react";
import { focusProgram, minimizeProgram } from "../helpers";

type Props = {
  program: Program;
  setProgram: Dispatch<SetStateAction<Program>>;
};

const TaskbarItem = ({ program, setProgram }: Props) => {
  const { focused, setFocused } = useGlobalContext();
  return (
    <div
      tabIndex={-1}
      onBlur={() => setFocused("")}
      className="w-[150px] h-full flex flex-shrink mt-0.5 items-center justify-start gap-2 px-2 rounded-sm"
      onClick={() => {
        if (program.isMinimized === true) {
          minimizeProgram(program, setProgram, setFocused);
          focusProgram(program, setProgram, setFocused);
        } else {
          if (program.id !== focused) {
            focusProgram(program, setProgram, setFocused);
          } else {
            minimizeProgram(program, setProgram, setFocused);
          }
        }
      }}
      style={
        program.id === focused && program.isMinimized === false
          ? {
              backgroundColor: "#1e52b7",
              boxShadow: `inset 0 0 1px 1px rgba(0, 0, 0, 0.2),
        inset 1px 0 1px rgba(0, 0, 0, 0.7)`,
            }
          : {
              backgroundColor: "#3c81f3",
              boxShadow: `inset -1px 0px rgba(0, 0, 0, 0.3),
        inset 1px 1px 1px rgba(255, 255, 255, 0.2)`,
            }
      }
    >
      <span>
        <Image
          src={`/icons/${program.id}.png`}
          alt={`${program.id}-desktop-icon`}
          width={14}
          height={14}
        />
      </span>
      <p className="text-white font-light truncate cursor-default">
        {program.name}
      </p>
    </div>
  );
};

export default TaskbarItem;
