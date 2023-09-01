import Image from "next/image";
import React from "react";

type Props = {
  image: string;
  name: string;
};

const ToolbarButton = ({ image, name }: Props) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex justify-center items-center w-[30px] h-[28px]">
        <Image
          src={image}
          alt={`${name}-toolbar-button`}
          height={0}
          width={0}
          sizes="100vw"
          className="w-full h-full"
        />
      </div>
      <p className="text-[11px] text-[#434C4B] tracking-tighter">{name}</p>
    </div>
  );
};

export default ToolbarButton;
