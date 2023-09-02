import React, { useState } from "react";
import InputToolbarButton from "./InputToolbarButton";
import InputSelectButton from "./InputSelectButton";
import { useGlobalContext } from "@/app/context/store";

type Props = {};

const MessengerInput = (props: Props) => {
  const { messages, setMessages } = useGlobalContext();
  const [text, setText] = useState<string>("");

  const handleSendPressed = () => {
    if (text.trim().length !== 0) {
      setMessages([
        ...messages,
        {
          type: "chat",
          text: text,
        },
      ]);
    }
    setText("");
  };

  return (
    <div className="flex flex-col min-h-32 mr-2 bg-white w-full rounded-md border-[1px] border-[#75889a]">
      <div className="flex-none flex items-center gap-2 rounded-t-md border-b-[1px] border-[#75889a] py-0.5 px-3 bg-gradient-to-b from-[#c8d6ed] via-[#ebf2fb] to-[#c8d6ed]">
        <InputToolbarButton image="letter" />
        <InputToolbarButton image="happy" arrow={true} />
        <InputToolbarButton image="voice-clip" />
        <InputToolbarButton image="wink" arrow={true} />
        <InputToolbarButton image="mountain" arrow={true} />
        <InputToolbarButton image="gift" arrow={true} />
        <InputToolbarButton image="nudge" />
      </div>
      <div className="flex-grow flex justify-between m-1">
        <textarea
          autoFocus
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="flex-grow h-full w-full outline-0 text-sm overflow-x-hidden"
          style={{
            resize: "none",
          }}
        />
        <div className="flex-none flex justify-center items-center cursor-pointer">
          <div
            className="rounded-md border-[1px] border-[#93989C] bg-[#f9fafe] hover:shadow-[#E2C47B] hover:shadow-inner py-3 px-2 text-xs font-semibold text-[#717780] shadow-[inset_-4px_-4px_4px_rgba(192,201,224,1)]"
            onClick={handleSendPressed}
          >
            Send
          </div>
        </div>
      </div>
      <div className="flex-none flex justify-end h-6 pr-4 rounded-b-md border-t-[1px] border-[#75889a] py-1 bg-gradient-to-b from-[#c8d6ed] via-[#ebf2fb] to-[#c8d6ed]">
        <InputSelectButton />
      </div>
    </div>
  );
};

export default MessengerInput;
