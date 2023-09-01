import Image from "next/image";
import React from "react";

type Props = {};

const MessengerChat = (props: Props) => {
  return (
    <div className="h-full w-full flex flex-col justify-center border-[#586170] border-[1px] rounded-md mr-2">
      <div className="flex-none flex items-center text-[11px] bg-[#EEF0FD] pl-2 py-1 border-[#586170] border-b-[1px] rounded-t-lg">
        To: <strong className="px-1">Rei Duraj</strong> (durajrei@gmail.com)
      </div>
      <div className="bg-[#fefede] border-[1px] border-[#586170] flex m-0.5 p-0.5 gap-1">
        <span className="h-full w-5">
          <Image
            src={"/msn/info.png"}
            alt="info-icon"
            height={12}
            width={12}
            className="inline"
          />
        </span>
        <div className="text-[11px] tracking-tighter py-0.5">
          Rei may not reply because his status is set to Away.
        </div>
      </div>
      <div className="flex-1 bg-white"></div>
    </div>
  );
};

export default MessengerChat;
