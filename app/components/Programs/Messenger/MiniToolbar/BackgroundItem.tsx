import React from "react";
import Image from "next/image";
import { useGlobalContext } from "@/app/context/store";

type Props = {
  background: string;
};

const BackgroundItem = ({ background }: Props) => {
  const { currentBackground, setCurrentBackground } = useGlobalContext();

  return (
    <div
      className="w-16 h-16 border-[1.25px] border-[#c5d3ed] hover:border-[#316ac5] bg-white hover:bg-[#cad9f0]"
      style={
        background === currentBackground
          ? {
              background: "#cad9f0",
              borderColor: "#316ac5",
            }
          : undefined
      }
      onClick={() => setCurrentBackground(background)}
    >
      <Image
        src={`/msn/backgrounds/${background}.png`}
        alt={`${background} msn background`}
        height={0}
        width={0}
        sizes="100vh"
        className="h-full w-auto"
      />
    </div>
  );
};

export default BackgroundItem;
