"use client";

import React, { useState } from "react";
import Image from "next/image";

type Props = {};

const Icons = (props: Props) => {
  const [clicked, setClicked] = useState("");

  return (
    <div className="flex flex-col gap-6">
      <div className="w-20 space-y-2" onClick={() => setClicked("ie")}>
        <div className="flex items-center justify-center">
          <Image
            src={"/windowsIcons/ie.png"}
            alt={"IE-desktop-icon"}
            height={32}
            width={32}
          />
        </div>
        <div className="text-white text-xs shadow-black text-shadow-sm text-center px-1 font-light">
          Internet Explorer
        </div>
      </div>

      <div
        className="group w-20 space-y-2"
        onClick={() => setClicked("winamp")}
      >
        <div className="flex items-center justify-center">
          <span
            style={{
              filter: "drop-shadow(0 0 blue)",
            }}
          >
            <Image
              src={"/windowsIcons/winamp.png"}
              alt={"Winamp-desktop-icon"}
              height={32}
              width={32}
              className={`${clicked === "winamp" ? "opacity-50" : ""}`}
            />
          </span>
        </div>
        <div className="flex items-center justify-center">
          <div
            className={
              "text-white text-xs shadow-black text-shadow-sm font-light px-1 group-focus-within:bg-blue-600"
            }
          >
            Winamp
          </div>
        </div>
      </div>

      <div className="w-20 space-y-2">
        <div className="flex items-center justify-center">
          <Image
            src={"/windowsIcons/msn.png"}
            alt={"Winamp-desktop-icon"}
            height={32}
            width={32}
          />
        </div>
        <div className="text-white text-center text-xs shadow-black text-shadow-sm px-1 font-light">
          Messenger
        </div>
      </div>
    </div>
  );
};

export default Icons;
