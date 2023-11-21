"use client";

import React, { ReactNode, useState } from "react";
import Image from "next/image";

type Props = {
  title: string;
  children?: ReactNode;
  highlighted?: boolean;
};

const SideCard = (props: Props) => {
  const [collapsed, setCollapsed] = useState<boolean>(false);

  return (
    <div className="w-full mb-3 flex-col">
      <div
        className={`relative h-6 pl-3 pr-1 rounded-t-[3px] ${
          props.highlighted
            ? "bg-gradient-to-r from-[#2059c8] from-[30%] to-[#2059c8]"
            : "bg-gradient-to-r from-[#f0f0ff] from-[30%] to-[#a8bcff]"
        } flex items-center`}
        onClick={() => setCollapsed((prev) => !prev)}
      >
        {props.highlighted && (
          <Image
            src={"/icons/projects.png"}
            alt="control panel icon"
            height={38}
            width={30}
            className="absolute bottom-0 left-0"
          />
        )}
        <p
          className={`font-bold ${
            props.highlighted ? "text-white pl-5" : "text-[#0c327d]"
          }  flex-1 hover:text-[#1c68ff] cursor-pointer`}
        >
          {props.title}
        </p>
        <Image
          src={"/windowsIcons/pullup.png"}
          alt="arrow button"
          height={18}
          width={18}
          className={`${
            (!props.children || collapsed === true) &&
            "rotate-180 cursor-pointer"
          }`}
          style={{
            filter: `drop-shadow(1px 1px 3px rgba(0, 0, 0, 0.3))`,
          }}
        />
      </div>
      {props.children && (
        <div
          className={`${
            collapsed === true ? "hidden" : "visible"
          } px-3 py-2 text-[#0c327d] leading-[14px] text-[10px] bg-gradient-to-r from-[#b4c8fb] via-[#a4b9fb] to-[#b4c8fb]`}
        >
          {props.children}
        </div>
      )}
    </div>
  );
};

export default SideCard;
