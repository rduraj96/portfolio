"use client";

import React, { useEffect, useState } from "react";
import Draggable from "react-draggable";
import MessengerFooter from "./MessengerFooter";
import MessengerToolbar from "./MessengerToolbar";
import MessengerReceiver from "./MessengerReceiver";
import MessengerSender from "./MessengerSender";
import Image from "next/image";
import { useGlobalContext } from "@/app/context/store";

type Props = {};

const MessengerWindow = (props: Props) => {
  const { playWink, currentBackground, setCurrentBackground } =
    useGlobalContext();
  useEffect(() => {
    if (typeof window !== undefined) {
      let background = localStorage.getItem("background") || "default";
      setCurrentBackground(background);
    }
  }, []);

  // useEffect(() => {
  //   function getCurrentBackground() {
  //     window.addEventListener("storage", () => {
  //       let background = localStorage.getItem("background") || "default";
  //       setCurrentBackground(background);
  //     });
  //   }

  //   return () => {
  //     window.removeEventListener("storage", getCurrentBackground);
  //   };
  // }, []);

  return (
    <Draggable handle="strong">
      <div
        className="relative h-[500px] w-[575px] overflow-hidden rounded-md grid grid-rows-[60px_1fr_140px_24px]"
        style={{
          background: `#D7E4F5 url('/msn/backgrounds/${currentBackground}.png') bottom 20px right/cover no-repeat`,
        }}
      >
        <strong>
          <MessengerToolbar />
        </strong>
        <MessengerReceiver />
        <MessengerSender />
        <MessengerFooter />
        <div
          className="absolute bottom-0 left-0 h-full w-full bg-repeat-y
          bg-[url('/msn/left.png'),_url('/msn/right.png')]
          bg-[position:bottom_left,_bottom_right]
          [clip-path:polygon(0%_11%,2%_16%,2%_97%,98%_97%,98%_4%,100%_4%,100%_100%,0_100%)]
          "
        >
          <div
            className="absolute h-full w-full bg-repeat-x
          bg-[url('/msn/bottom.png')]
          bg-bottom"
          >
            <div
              className="absolute h-full w-full bg-no-repeat
          bg-[url('/msn/left-corner.png'),_url('/msn/right-corner.png')]
          bg-[position:bottom_left,_bottom_right]"
            />
          </div>
        </div>
        {playWink.isPlaying === true && (
          <Image
            src={`/msn/winks/${playWink.name}.gif`}
            alt={`${playWink.name}  wink gif`}
            height={0}
            width={0}
            unoptimized={true}
            className="absolute h-full w-auto left-[50%] -translate-x-[50%]"
          />
        )}
      </div>
    </Draggable>
  );
};

export default MessengerWindow;
