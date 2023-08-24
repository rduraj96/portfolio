import React, { Dispatch, SetStateAction } from "react";
import Image from "next/image";

type Props = {
  idx: number;
  program: Program;
  setProgram: Dispatch<SetStateAction<Program>>;
};

const IconContainer = ({ idx, program, setProgram }: Props) => {
  return (
    <div
      className="group w-20 space-y-2"
      tabIndex={idx}
      onDoubleClick={() => {
        if (program.isOpen === false) {
          setProgram((prevState) => ({
            ...prevState,
            isOpen: !prevState.isOpen,
          }));
        }
      }}
    >
      <div className="flex items-center justify-center">
        <span
          style={{
            filter: "drop-shadow(0 0 blue)",
          }}
        >
          <Image
            src={`/windowsIcons/${program.id}.png`}
            alt={`${program.id}-desktop-icon`}
            height={32}
            width={32}
            className="group-focus:opacity-50"
          />
        </span>
      </div>
      <div className="flex items-center justify-center text-center">
        <div
          className={
            "text-white text-xs shadow-black text-shadow-sm font-light px-1 group-focus:bg-blue-600 whitespace-normal"
          }
        >
          {program.name}
        </div>
      </div>
    </div>
  );
};

export default IconContainer;
