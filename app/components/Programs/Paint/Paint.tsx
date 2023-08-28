"use client";

import Image from "next/image";
import React, { useState } from "react";
import Draggable from "react-draggable";
import Iframe from "react-iframe";
import { closeProgram, minimizeProgram } from "../../helpers";
import { useGlobalContext } from "@/app/context/store";

type Props = {};

const Paint = (props: Props) => {
  const {
    paint,
    setPaint,
    runningTasks,
    setRunningTasks,
    maxIndex,
    setMaxIndex,
  } = useGlobalContext();
  const [zIndex, setZIndex] = useState<number>(0);

  const handleIndexChange = () => {
    setZIndex(maxIndex + 1);
    setMaxIndex((prev) => prev + 1);
    console.log("PAINT: ", maxIndex);
  };

  return (
    paint.isOpen === true && (
      <Draggable onMouseDown={handleIndexChange}>
        <div
          className={`window w-fit
          ${
            runningTasks.find((task) => task.id === paint.id)?.isMinimized ===
            true
              ? "invisible"
              : "visible"
          }
          
          `}
          style={{
            position: "relative",
            zIndex: zIndex,
          }}
        >
          <div className="title-bar">
            <div className="title-bar-text flex items-center gap-1">
              <Image
                src={"/windowsIcons/paint.png"}
                alt={"paint"}
                height={"18"}
                width={"18"}
              />
              Untitled - Paint
            </div>
            <div className="title-bar-controls">
              <button
                aria-label="Minimize"
                onClick={() => {
                  console.log("Minimized Pressed");
                  minimizeProgram(paint, runningTasks, setRunningTasks);
                }}
              />
              <button aria-label="Maximize" />
              <button
                aria-label="Close"
                onClick={() => {
                  closeProgram(paint, setPaint);
                  setRunningTasks(
                    runningTasks.filter((task) => task.id !== paint.id)
                  );
                }}
              />
            </div>
          </div>
          <div className="window-body w-[600px] h-[500px]">
            <iframe
              src="https://jspaint.app"
              title="paint"
              style={{
                height: "100%",
                width: "100%",
              }}
            />
          </div>
        </div>
      </Draggable>
    )
  );
};

export default Paint;
