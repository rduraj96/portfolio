"use client";

import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import Draggable from "react-draggable";
import { closeProgram, focusProgram, minimizeProgram } from "../helpers";
import Image from "next/image";

type Props = {
  children: React.ReactNode;
  program: Program;
  setProgram: Dispatch<SetStateAction<Program>>;
  className?: string;
};

const ProgramWindow = ({ children, program, setProgram, className }: Props) => {
  return (
    program.isOpen === true && (
      <Draggable onMouseDown={() => focusProgram(setProgram)}>
        <div
          className={`window ${className}
          ${program.isMinimized === true ? "invisible" : "visible"}
          
          `}
          style={{
            position: "absolute",
            zIndex: program.zIndex,
          }}
        >
          <div
            className="title-bar py-3"
            // style={{
            //   background:
            //     "linear-gradient(to bottom, #7697e7 0%,#7e9ee3 3%,#94afe8 6%,#97b4e9 8%,#82a5e4 14%,#7c9fe2 17%,#7996de 25%,#7b99e1 56%,#82a9e9 81%,#80a5e7 89%,#7b96e1 94%,#7a93df 97%,#abbae3 100%)",
            // }}
            style={{
              paddingTop: "12px",
              paddingBottom: "12px",
            }}
          >
            <div className="title-bar-text flex items-center gap-1">
              <Image
                src={`/windowsIcons/${program.id}.png`}
                alt={`${program.name}`}
                height={"18"}
                width={"18"}
              />
              {program.name}
            </div>
            <div className="title-bar-controls">
              <button
                aria-label="Minimize"
                onClick={() => {
                  console.log("Minimized Pressed");
                  minimizeProgram(program, setProgram);
                }}
              />
              <button aria-label="Maximize" />
              <button
                aria-label="Close"
                onClick={() => {
                  closeProgram(program, setProgram);
                }}
              />
            </div>
          </div>
          {children}
        </div>
      </Draggable>
    )
  );
};

export default ProgramWindow;
