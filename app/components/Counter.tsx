"use client";

import React, { useEffect, useState } from "react";
import Draggable from "react-draggable";
import "xp.css/dist/XP.css";
import { useGlobalContext } from "../context/store";
import { closeProgram, minimizeProgram } from "./helpers";

type Props = {};

const Counter = (props: Props) => {
  const [count, setCount] = useState(0);
  const { msn, setMsn, runningTasks, setRunningTasks, maxIndex, setMaxIndex } =
    useGlobalContext();
  const [zIndex, setZIndex] = useState<number>(0);

  const handleIndexChange = () => {
    setZIndex(maxIndex + 1);
    setMaxIndex((prev) => prev + 1);
    console.log("COUNTER: ", maxIndex);
  };

  return (
    msn.isOpen === true && (
      <Draggable onMouseDown={handleIndexChange}>
        <div
          tabIndex={-1}
          className={`window z-5
          ${
            runningTasks.find((task) => task.id === msn.id)?.isMinimized ===
            true
              ? "invisible"
              : "visible"
          }
          
          `}
          style={{
            width: 300,
            position: "relative",
            zIndex: zIndex,
          }}
        >
          <div className="title-bar">
            <div className="title-bar-text">Counter</div>
            <div className="title-bar-controls">
              <button
                aria-label="Minimize"
                onClick={() => {
                  console.log("Minimized Pressed");
                  minimizeProgram(msn, runningTasks, setRunningTasks);
                }}
              />
              <button aria-label="Maximize" />
              <button
                aria-label="Close"
                onClick={() => {
                  closeProgram(msn, setMsn);
                  setRunningTasks(
                    runningTasks.filter((task) => task.id !== msn.id)
                  );
                }}
              />
            </div>
          </div>

          <div className="window-body">
            <p style={{ textAlign: "center" }}>Current count: {count}</p>
            <div className="field-row" style={{ justifyContent: "center" }}>
              <button onClick={() => setCount(count + 1)}>+</button>
              <button onClick={() => setCount(count - 1)}>-</button>
              <button onClick={() => setCount(0)}>0</button>
            </div>
          </div>
        </div>
      </Draggable>
    )
  );
};

export default Counter;
