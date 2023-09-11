import { useGlobalContext } from "@/app/context/store";
import Image from "next/image";
import React from "react";

type Props = {
  image: string;
  arrow?: boolean;
};

const InputToolbarButton = ({ image, arrow }: Props) => {
  const { messages, setMessages } = useGlobalContext();

  const nudgeHandler = () => {
    if (image === "nudge") {
      let nudge = new Audio("/sounds/nudge.mp3");
      nudge.play();
      setMessages([
        ...messages,
        {
          type: "nudge",
          text: "You have just sent a Nudge!",
        },
      ]);
    }
  };
  return (
    <div
      className="flex justify-center items-center h-full px-1 group rounded-sm hover:cursor-pointer hover:bg-[#f2f5fb] hover:bg-opacity-75 border-[1.25px] border-transparent hover:border-[#515c73]"
      onClick={nudgeHandler}
    >
      <Image
        src={`/msn/input-buttons/${image}.png`}
        alt={`${image}-input-toolbar-button`}
        height={0}
        width={0}
        sizes="100vh"
        className="h-[95%] w-auto"
      />
      {arrow === true && (
        <div className="transform scale-y-50 scale-x-75 pl-1">⯆</div>
      )}
      {(image === "voice-clip" || image === "voice-clip-active") && (
        <p className="tracking-lighter text-[10px] pl-1">Voice Clip</p>
      )}
    </div>
  );
};

export default InputToolbarButton;
