import React, { ReactNode } from "react";
import Image from "next/image";

type Props = {
  title: string;
  children?: ReactNode;
};

const SideCard = (props: Props) => {
  return (
    <div className="w-full mb-3">
      <div className="h-6 pl-3 pr-1 rounded-t-[3px] bg-gradient-to-r from-[#f0f0ff] from-[30%] to-[#a8bcff] flex items-center">
        <p className="font-bold text-[#0c327d] flex-1">{props.title}</p>
        <Image
          src={"/windowsIcons/pullup.png"}
          alt="arrow button"
          height={18}
          width={18}
          className={`${!props.children && "rotate-180"}`}
          style={{
            filter: `drop-shadow(1px 1px 3px rgba(0, 0, 0, 0.3))`,
          }}
        />
      </div>
      {props.children && (
        <div className="px-3 py-2 text-[#0c327d] leading-[14px] text-[10px] bg-gradient-to-r from-[#b4c8fb] via-[#a4b9fb] to-[#b4c8fb]">
          {props.children}
        </div>
      )}
    </div>
  );
};

export default SideCard;
