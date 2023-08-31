"use client";

import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import Draggable from "react-draggable";
import {
  closeProgram,
  focusProgram,
  getMaxZIndex,
  minimizeProgram,
} from "../helpers";
import Image from "next/image";
import { useGlobalContext } from "@/app/context/store";

type Props = {
  children: React.ReactNode;
  program: Program;
  setProgram: Dispatch<SetStateAction<Program>>;
  className?: string;
};

const ProgramWindow = ({ children, program, setProgram, className }: Props) => {
  const { focused, setFocused } = useGlobalContext();

  return (
    program.isOpen === true && (
      <Draggable handle="strong">
        <div
          className={`select-none window ${className}
          
          `}
          tabIndex={-1}
          onClick={() => {
            program.id !== focused &&
              focusProgram(program, setProgram, setFocused);
          }}
          onBlur={() => setFocused("")}
          style={{
            visibility: program.isMinimized === true ? "hidden" : "visible",
            position: "absolute",
            zIndex: program.zIndex,
            boxShadow:
              program.id !== focused
                ? `inset -1px -1px #7b99e1, inset 1px 1px #7b99e1, inset -2px -2px #7b99e1, inset 2px 2px #7b99e1,
        inset -3px -3px #7b99e1, inset 3px 3px #7b99e1`
                : "",
          }}
        >
          <strong
            className="title-bar py-3"
            style={
              program.id !== focused
                ? {
                    background:
                      "linear-gradient(to bottom, #7697e7 0%,#7e9ee3 3%,#94afe8 6%,#97b4e9 8%,#82a5e4 14%,#7c9fe2 17%,#7996de 25%,#7b99e1 56%,#82a9e9 81%,#80a5e7 89%,#7b96e1 94%,#7a93df 97%,#abbae3 100%)",
                    paddingTop: "12px",
                    paddingBottom: "12px",
                    borderTop: "1px solid #7b99e1",
                    borderLeft: "1px solid #7b99e1",
                    borderRight: "1px solid #7b99e1",
                  }
                : {
                    paddingTop: "12px",
                    paddingBottom: "12px",
                  }
            }
          >
            <div className="title-bar-text flex items-center gap-1">
              <Image
                src={`/icons/${program.id}.png`}
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
                  minimizeProgram(program, setProgram, setFocused);
                }}
                style={
                  program.id !== focused
                    ? {
                        opacity: "50%",
                      }
                    : {}
                }
              />
              <button
                aria-label="Maximize"
                style={
                  program.id !== focused
                    ? {
                        opacity: "50%",
                      }
                    : {}
                }
              />
              <button
                aria-label="Close"
                onClick={() => {
                  closeProgram(program, setProgram, setFocused);
                }}
                style={
                  program.id !== focused
                    ? {
                        opacity: "50%",
                      }
                    : {}
                }
              />
            </div>
          </strong>
          {children}
        </div>
      </Draggable>
    )
  );
};

export default ProgramWindow;
