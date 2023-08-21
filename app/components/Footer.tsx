"use client";

import Image from "next/image";
import React, { useState } from "react";
import "xp.css/dist/XP.css";

type Props = {};

const Footer = (props: Props) => {
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
      <div className="absolute flex items-center justify-center right-0 bottom-0 h-full w-24 bg-blue-400">
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
      </div>
    </div>
  );
};

export default Footer;
