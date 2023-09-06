import React from "react";
import Image from "next/image";
import { useGlobalContext } from "@/app/context/store";

type Props = {
  wink: string;
};

const MiniToolbarItem = ({ wink }: Props) => {
  const { messages, setMessages } = useGlobalContext();

  const winkHandler = () => {
    setMessages([
      ...messages,
      {
        type: "wink",
        text: wink,
      },
    ]);
  };

  return (
    <div
      className="w-16 h-16 border-[1.25px] border-[#c5d3ed] hover:border-[#316ac5] bg-white hover:bg-[#cad9f0]"
      onClick={winkHandler}
    >
      <Image
        src={`/msn/winks/${wink}.png`}
        alt={`${wink} wink`}
        height={0}
        width={0}
        sizes="100vh"
        className="h-full w-auto"
      />
    </div>
  );
};

export default MiniToolbarItem;
