"use client";

import React from "react";
import Draggable from "react-draggable";
import MessengerFooter from "./MessengerFooter";
import MessengerToolbar from "./MessengerToolbar";
import MessengerReceiver from "./MessengerReceiver";
import MessengerSender from "./MessengerSender";

type Props = {};

const MessengerWindow = (props: Props) => {
  return (
    <Draggable>
      <div
        className="relative h-[400px] w-[475px] overflow-hidden rounded-md
        bg-[#D7E4F5] bg-msn-window-background bg-bottom-[20px] bg-right bg-no-repeat bg-cover"
      >
        <div className="w-full h-full grid grid-rows-[60px_1fr_140px_24px]">
          <MessengerToolbar />
          <MessengerReceiver />
          <MessengerSender />
          <MessengerFooter />
        </div>
        <div
          className="absolute bottom-0 left-0 h-full w-full bg-repeat-y
          bg-[url('/msn/left.png'),_url('/msn/right.png')]
          bg-[position:bottom_left,_bottom_right]
          [clip-path:polygon(0%_14.5%,100%_5%,100%_100%,0%_100%)]
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
      </div>
    </Draggable>
  );
};

export default MessengerWindow;
