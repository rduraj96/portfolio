"use client";

import React from "react";
import Icons from "./Icons/Icons";
import Projects from "./Programs/MyProjects/Projects";
import InternetExplorer from "./Programs/InternetExplorer/InternetExplorer";
import Paint from "./Programs/Paint/Paint";
import Messenger from "./Programs/Messenger/Messenger";
import TaskBar from "./Footer/TaskBar";
import dynamic from "next/dynamic";

const Winamp = dynamic(() => import("./Programs/Winamp/Winamp"), {
  ssr: false,
});

type Props = {};

const WindowsXp = (props: Props) => {
  return (
    <main
      className="relative h-full overflow-hidden bg-[url('/wallpapers/background.jpg')] bg-no-repeat bg-cover"
      onPointerDown={(e) => e.stopPropagation()}
    >
      <div className="mt-10 ml-10 w-fit">
        <Icons />
      </div>
      <Winamp />
      <Projects />
      <InternetExplorer />
      <Paint />
      <Messenger />
      <TaskBar />
    </main>
  );
};

export default WindowsXp;
