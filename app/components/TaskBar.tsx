"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import "xp.css/dist/XP.css";

type Props = {};

const getTime = () => {
  const date = new Date();
  let hour = date.getHours();
  let hourPostFix = "AM";
  let min = date.getMinutes().toString();
  if (hour >= 12) {
    hour -= 12;
    hourPostFix = "PM";
  }
  if (hour === 0) {
    hour = 12;
  }
  if (Number(min) < 10) {
    min = "0" + min;
  }
  return `${hour}:${min} ${hourPostFix}`;
};

const TaskBar = (props: Props) => {
  const [time, setTime] = useState(getTime);

  useEffect(() => {
    const timer = setInterval(() => {
      const newTime = getTime();
      newTime !== time && setTime(newTime);
    }, 1000);
    return () => clearInterval(timer);
  }, [time]);

  return (
    <div className="fixed bottom-0 left-0 right-0 w-full h-[30px] bg-blue-600">
      <div className="absolute left-0 bottom-0">
        <Image
          src={"/windowsIcons/start.png"}
          alt="start-button"
          width={90}
          height={42}
          className={`cursor-pointer`}
        />
      </div>
      <div className="absolute flex items-center justify-center right-0 bottom-0 h-full w-fit px-2.5 space-x-2 bg-[#0d9aef]">
        <div className="flex gap-1">
          <Image
            src={"/windowsIcons/volume.png"}
            alt={"volume-tray-icon"}
            width={16}
            height={16}
          />
          <Image
            src={"/windowsIcons/usb.png"}
            alt={"usb-tray-icon"}
            width={16}
            height={16}
          />
          <Image
            src={"/windowsIcons/firewall.png"}
            alt={"firewall-tray-icon"}
            width={16}
            height={16}
          />
        </div>
        <div className="text-white whitespace-nowrap text-xs px-1">{time}</div>
      </div>
    </div>
  );
};

export default TaskBar;
