import Image from "next/image";
import React, { Children, ReactNode } from "react";

type Props = {
  icon: string;
  title?: string;
  height: number;
  width: number;
  disabled?: boolean;
  arrow?: true;
};

const NavigateBarItem = (props: Props) => {
  return (
    <div
      className={`w-fit flex justify-center items-center gap-1 py-1 px-0.5 rounded font-semibold border-[1px] border-transparent ${
        props.disabled !== true &&
        "hover:border-[1px] hover:border-[#0000001a] hover:shadow-[0_-1px_1px_rgba(0,0,0,0.1)]"
      }`}
      style={
        props.disabled === true
          ? {
              filter: "grayscale(1)",
              opacity: 0.7,
            }
          : {}
      }
    >
      <Image
        src={`/windowsIcons/${props.icon}.png`}
        alt={`${props.icon}  Icon`}
        height={props.height}
        width={props.width}
      />
      {props.title && <p>{props.title}</p>}
      {props.arrow === true && (
        <span className="transform scale-y-50 scale-x-75">⯆</span>
      )}
    </div>
  );
};

export default NavigateBarItem;