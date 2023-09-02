"use client";

import React, { useEffect } from "react";
import Draggable from "react-draggable";
import MessengerFooter from "./MessengerFooter";
import MessengerToolbar from "./MessengerToolbar";
import MessengerReceiver from "./MessengerReceiver";
import MessengerSender from "./MessengerSender";

type Props = {};

const MessengerWindow = (props: Props) => {
  useEffect(() => {
    const noti = new Audio("/sounds/notification.mp3");
    noti.play();
  }, []);

  return (
    <Draggable handle="strong">
      <div
        className="relative h-[500px] w-[575px] overflow-hidden rounded-md grid grid-rows-[60px_1fr_140px_24px]
        bg-[#D7E4F5] bg-msn-window-background bg-bottom-[20px] bg-right bg-no-repeat bg-cover"
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
      </div>
    </Draggable>
  );
};

export default MessengerWindow;
