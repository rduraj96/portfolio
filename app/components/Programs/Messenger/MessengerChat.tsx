import { useGlobalContext } from "@/app/context/store";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import * as ScrollArea from "@radix-ui/react-scroll-area";

type Props = {};

const MessengerChat = (props: Props) => {
  const { messages, playWink, setPlayWink } = useGlobalContext();
  const messagesEndRef = useRef<null | HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const playWinkHandler = (name: string) => {
    const audio = new Audio(`/sounds/${name}.mp3`);
    setPlayWink({
      isPlaying: true,
      name: name,
    });
    audio.play();
    audio.onended = function () {
      setPlayWink({
        isPlaying: false,
        name: "name",
      });
    };
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className="h-full w-full flex flex-col justify-center border-[#75889a] border-[1px] rounded-t-md mr-2">
      <div className="flex-none flex items-center text-[12px] text-[#364558] bg-gradient-to-b from-[#e5f2fb] to-[#e9f1fc] pl-2 py-1 border-[#75889a] border-b-[1px] rounded-t-lg">
        To: <strong className="px-1">Rei Duraj</strong> {"<durajrei@gmail.com>"}
      </div>
      <div className="bg-[#fefede] border-[1px] border-[#75889a] flex gap-0.5 p-0.5 m-0.5">
        <span className="h-full w-5">
          <Image
            src={"/msn/info.png"}
            alt="info-icon"
            height={12}
            width={12}
            className="inline"
          />
        </span>
        <div className="text-[12px] tracking-tighter py-0.5">
          Rei may not reply because his status is set to Away.
        </div>
      </div>
      <div className="flex-grow bg-white mt-1 p-1">
        <ScrollArea.Root className="w-96 h-48 overflow-hidden">
          <ScrollArea.Viewport className="w-full h-full">
            <div className="font-semibold">
              <p className="text-gray-500">{`Rei Duraj <durajrei@gmail.com> says:`}</p>
              <p className="text-[13px] pl-4">
                Message me here for any inquiries
              </p>
            </div>
            {messages &&
              messages.map((message, i) => (
                <div key={i} className="mt-0.5">
                  {message.type === "chat" && (
                    <div className="font-semibold">
                      <p className="text-gray-500">{`Visitor <visitor@domain.com> says:`}</p>
                      <p className="text-[13px] pl-4 break-words overflow-hidden whitespace-pre-line">
                        {message.text}
                      </p>
                    </div>
                  )}
                  {message.type === "nudge" && (
                    <div>
                      <p>----------</p>
                      <p className="font-bold">{message.text}</p>
                      <p>----------</p>
                    </div>
                  )}
                  {message.type === "wink" && (
                    <div className="font-semibold">
                      <p className="text-gray-500">{`Visitor <visitor@domain.com> says:`}</p>
                      <div className="w-18 h-16 pl-4">
                        <Image
                          src={`/msn/winks/${message.text}.png`}
                          alt={`${message.text} wink gif`}
                          height={0}
                          width={0}
                          sizes="100vh"
                          className="h-full w-auto"
                        />
                      </div>
                      <p
                        className="w-fit text-blue-500 underline pl-4 pt-1 hover:text-blue-800 hover:cursor-pointer"
                        onClick={() => playWinkHandler(message.text)}
                      >{`Play "${message.text}"`}</p>
                    </div>
                  )}
                </div>
              ))}
            <div ref={messagesEndRef} />
          </ScrollArea.Viewport>
          <ScrollArea.Scrollbar orientation="vertical">
            <ScrollArea.Thumb />
          </ScrollArea.Scrollbar>
          <ScrollArea.Corner />
        </ScrollArea.Root>

        {/* <p className="tracking-lighers px-2">
          <span className="inline-flex pr-1">
            <Image
              src={"/msn/chat-icon.png"}
              alt="chat-icon"
              height={12}
              width={12}
            />
          </span>
          Please give out your password or credit card number in an instant
          message conversation.
        </p> */}
      </div>
    </div>
  );
};

export default MessengerChat;
