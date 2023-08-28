import { useGlobalContext } from "@/app/context/store";
import Image from "next/image";
import React, { Dispatch, SetStateAction } from "react";
import { minimizeProgram } from "../helpers";

type Props = {
  program: Program;
  // setProgram: Dispatch<SetStateAction<Program>>;
};

const TaskbarItem = ({ program }: Props) => {
  const { runningTasks, setRunningTasks } = useGlobalContext();

  return (
    <div
      tabIndex={-1}
      className="w-[150px] h-full mt-0.5 px-2 rounded-sm flex flex-shrink bg-[#3c81f3] hover:bg-[#53a3ff] items-center justify-start gap-2 focus:bg-[#1e52b7] shadow-inner-neutral-200 border-[#1042af] focus:hover:bg-[#3576f3]"
      onClick={() => minimizeProgram(program, runningTasks, setRunningTasks)}
      style={{
        boxShadow: `inset -1px 0px rgba(0, 0, 0, 0.3),
        inset 1px 1px 1px rgba(255, 255, 255, 0.2)`,
      }}
    >
      <span>
        <Image
          src={`/windowsIcons/${program.id}.png`}
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
