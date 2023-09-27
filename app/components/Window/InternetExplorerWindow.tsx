"use client";

import React, { ReactNode } from "react";
import ProgramWindow from "./ProgramWindow";
import { useGlobalContext } from "@/app/context/store";
import OptionBarItem from "./OptionBarItem";
import Image from "next/image";
import NavigateBarItem from "./NavigateBarItem";

type Props = {
  children: ReactNode;
};

const InternetExplorerWindow = (props: Props) => {
  const { intExplorer, setIntExplorer } = useGlobalContext();

  return (
    <ProgramWindow program={intExplorer} setProgram={setIntExplorer}>
      <div
        className="window-body w-[750px]"
        style={{
          margin: 0,
        }}
      >
        <div className="mx-1">
          <div className="relative flex justify-between">
            <div className="w-full h-fit flex border-b-[1px] border-r-[1px] border-[#0000001a]">
              <OptionBarItem>File</OptionBarItem>
              <OptionBarItem>Edit</OptionBarItem>
              <OptionBarItem>View</OptionBarItem>
              <OptionBarItem>Favorites</OptionBarItem>
              <OptionBarItem>Tools</OptionBarItem>
              <OptionBarItem>Help</OptionBarItem>
            </div>
            <div className="">
              <Image
                src={"/windowsIcons/windows.png"}
                alt="windows logo"
                height={22}
                width={39}
              />
            </div>
          </div>
          <div className="flex h-10 py-[2px] border-b-[1px] border-[#0000001a]">
            <NavigateBarItem
              icon="back"
              title="Back"
              height={28}
              width={28}
              disabled={true}
              arrow={true}
            />
            <NavigateBarItem
              icon="forward"
              height={28}
              width={28}
              disabled={true}
              arrow={true}
            />
            <NavigateBarItem icon="stop" height={32} width={32} />
            <NavigateBarItem icon="refresh" height={32} width={32} />
            <NavigateBarItem icon="home" height={32} width={32} />
            <div className="h-[90%] w-[1px] bg-[#00000033] mx-0.5" />
            <NavigateBarItem
              icon="search"
              title="Search"
              height={20}
              width={20}
            />
            <NavigateBarItem
              icon="favorites"
              title="Favorites"
              height={22}
              width={22}
            />
            <NavigateBarItem icon="history" height={32} width={32} />
            <div className="h-[90%] w-[1px] bg-[#00000033] mx-0.5" />
            <NavigateBarItem icon="mail" height={32} width={32} arrow={true} />
            <NavigateBarItem icon="print" height={24} width={24} />
            <NavigateBarItem
              icon="edit"
              height={28}
              width={28}
              disabled={true}
            />
            <NavigateBarItem icon="msn" height={24} width={24} />
          </div>
          <div className="w-full mx-0.5 p-0.5 h-6 flex">
            <p className="p-0.5 text-center text-[#00000080]">Address</p>
            <select className="flex-grow" disabled>
              <option>https://www.google.com</option>
            </select>
            <div className="flex gap-1 items-center pl-1 pr-4">
              <Image
                src={"/windowsIcons/goArrow.png"}
                alt="go icon"
                height={0}
                width={0}
                sizes="100vh"
                className="h-full w-fit"
              />
              <p className="text-xs">Go</p>
            </div>
          </div>
        </div>
        {props.children}
      </div>
      <div className="status-bar flex">
        <div className="status-bar-field flex items-center gap-1">
          <Image
            src={"/windowsIcons/ie-paper.png"}
            alt="internet explorer icon"
            height={16}
            width={16}
          />
          <p>Done</p>
        </div>
        <div className="status-bar-field"></div>
        <div className="status-bar-field"></div>
        <div className="status-bar-field"></div>
        <div className="status-bar-field"></div>
        <div className="status-bar-field"></div>
        <div className="status-bar-field flex items-center gap-1">
          <Image
            src={"/windowsIcons/earth.png"}
            alt="earth icon"
            height={16}
            width={16}
          />
          <p>Internet</p>
        </div>
      </div>
    </ProgramWindow>
  );
};

export default InternetExplorerWindow;
