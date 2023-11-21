import React from "react";
import Image from "next/image";

type Props = {
  icon: string;
  title: string;
};

const SideCardItem = (props: Props) => {
  return (
    <div className="flex gap-1 mb-1 hover:underline hover:text-[#2b72ff] cursor-pointer">
      <Image
        src={`/windowsIcons/${props.icon}.png`}
        alt={`${props.icon} icon`}
        height={16}
        width={16}
      />
      {props.title}
    </div>
  );
};

export default SideCardItem;
