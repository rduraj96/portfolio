"use client";

import { useGlobalContext } from "@/app/context/store";
import React, { useEffect, useRef, useState } from "react";
import Webamp from "webamp";
import { closeProgram, minimizeProgram } from "../../helpers";

type Props = {};

const Winamp = (props: Props) => {
  const ref = useRef(null);
  const webamp = useRef<Webamp | null>(null);
  const { winamp, setWinamp, runningTasks, setRunningTasks } =
    useGlobalContext();

  useEffect(() => {
    const target = ref.current;
    if (!target) {
      return;
    }
    webamp.current = new Webamp({});
    webamp.current.renderWhenReady(target);
    return () => {
      if (webamp.current) {
        // webamp.current.dispose();
        webamp.current = null;
      }
    };
  }, [ref, winamp]);

  useEffect(() => {
    if (webamp.current) {
      webamp.current.onClose(() => {
        closeProgram(winamp, setWinamp);
        setRunningTasks(runningTasks.filter((task) => task.id !== winamp.id));
      });
      webamp.current.onMinimize(() => {
        minimizeProgram(winamp, runningTasks, setRunningTasks);
      });
    }
  });

  if (!Webamp.browserIsSupported()) {
    return <div>Not supported</div>;
  }

  return (
    winamp.isOpen === true &&
    runningTasks.find((task) => task.id === winamp.id)?.isMinimized ===
      false && <div ref={ref} />
  );
};

export default Winamp;
