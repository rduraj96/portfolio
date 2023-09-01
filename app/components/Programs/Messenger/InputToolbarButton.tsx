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
      className="flex justify-center items-center h-full group hover:cursor-pointer"
      onClick={nudgeHandler}
    >
      <Image
        src={`/msn/input-buttons/${image}.png`}
        alt={`${image}-input-toolbar-button`}
        height={0}
        width={0}
        sizes="100vh"
        className="h-full w-auto"
      />
      {arrow === true && (
        <div className="transform scale-y-50 scale-x-75 pl-1 group-hover:rotate-180">
          ⯆
        </div>
      )}
      {image === "voice-clip" && (
        <p className="tracking-lighter text-[10px] pl-1">Voice Clip</p>
      )}
    </div>
  );
};

export default InputToolbarButton;
