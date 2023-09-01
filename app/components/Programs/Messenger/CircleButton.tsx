import Image from "next/image";
import React from "react";

type Props = {
  name: string;
  className?: string;
  width?: number;
  height?: number;
};

const CircleButton = ({ name, className, width, height }: Props) => {
  return (
    <div
      className={`${className} w-[17px] h-[17px] flex items-center justify-center 
    bg-[url(/msn/toolbar-button.png)] bg-no-repeat bg-cover`}
    >
      <Image
        src={`/msn/buttons/${name}.png`}
        alt={`${name}-button`}
        height={height ? height : 12}
        width={width ? width : 12}
        // sizes="100vh"
        // className="w-full h-auto"
      />
    </div>
  );
};

export default CircleButton;
