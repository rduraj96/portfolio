"use client";

import React, { ReactNode } from "react";
import ProgramWindow from "./ProgramWindow";
import { useGlobalContext } from "@/app/context/store";
import NavigateBarItem from "./NavigateBarItem";
import OptionBarItem from "./OptionBarItem";
import Image from "next/image";

type Props = {
  children: ReactNode;
};

const ExplorerWindow = (props: Props) => {
  const { projects, setProjects } = useGlobalContext();

  return (
    <ProgramWindow
      program={projects}
      setProgram={setProjects}
      //   className="w-[350px]"
    >
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
          <div className="flex h-10 p-1 border-b-[1px] border-[#0000001a]">
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
            <NavigateBarItem icon="up" height={28} width={28} />
            <div className="h-[90%] w-[1px] bg-[#00000033] mx-0.5" />
            <NavigateBarItem
              icon="search"
              title="Search"
              height={20}
              width={20}
            />
            <NavigateBarItem
              icon="folders"
              title="Folders"
              height={28}
              width={28}
            />
            <div className="h-[90%] w-[1px] bg-[#00000033] mx-0.5" />
            <NavigateBarItem
              icon="sizing"
              height={22}
              width={22}
              arrow={true}
            />
          </div>
          <div className="w-full mx-0.5 p-0.5 h-6 flex">
            <p className="p-0.5 text-center text-[#00000080]">Address</p>
            <select className="flex-grow" disabled>
              <option>
                <div>
                  <Image
                    src={"/windowsIcons/shared.png"}
                    alt="folder icon"
                    height={14}
                    width={14}
                  />
                  <p>C:\Desktop\My Projects</p>
                </div>
              </option>
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
    </ProgramWindow>
  );
};

export default ExplorerWindow;
