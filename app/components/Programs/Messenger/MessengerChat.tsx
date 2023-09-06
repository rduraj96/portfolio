import { useGlobalContext } from "@/app/context/store";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import * as ScrollArea from "@radix-ui/react-scroll-area";

type Props = {};

const MessengerChat = (props: Props) => {
  const { messages, playWink, setPlayWink } = useGlobalContext();
  const messagesEndRef = useRef<null | HTMLDivElement>(null);
  const audioRef = useRef<null | HTMLAudioElement>(null);

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

  const playVoiceHandler = (blobUrl: string) => {
    if (!audioRef.current) {
      audioRef.current = new Audio(blobUrl);
      audioRef.current.play();
      audioRef.current.onended = function () {
        audioRef.current = null;
      };
    } else {
      audioRef.current.pause();
      audioRef.current = null;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className="h-full w-full flex flex-col justify-center border-[#515c73] border-[1px] rounded-t-md mr-2 opacity-90">
      <div className="flex-none flex items-center text-[12px] text-[#364558] bg-gradient-to-b from-[#e5f2fb] to-[#e9f1fc] pl-2 py-1 border-[#515c73] border-b-[1px] rounded-t-lg">
        To: <strong className="px-1">Rei Duraj</strong> {"<durajrei@gmail.com>"}
      </div>
      <div className="flex-grow bg-white p-1">
        <div className="bg-[#fefede] border-[1px] border-[#515c73] flex gap-0.5 p-0.5 mb-2">
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
        <ScrollArea.Root className="w-full h-48 overflow-hidden">
          <ScrollArea.Viewport className="w-full h-full">
            <div className="font-semibold">
              <p className="text-gray-500">{`Rei Duraj <durajrei@gmail.com> says:`}</p>
              <p className="text-[13px] pl-4">
                Message me here for any inquiries
              </p>
            </div>
            <div className="font-semibold">
              <p className="text-gray-500">{`Visitor <visitor@domain.com> says:`}</p>
              <div className="w-18 h-16 pl-4 mt-1">
                <Image
                  src={`/msn/winks/heart.png`}
                  alt={`heart wink gif`}
                  height={0}
                  width={0}
                  sizes="100vh"
                  className="h-full w-auto"
                />
              </div>
              <p
                className="w-fit text-blue-500 underline pl-4 pt-1 hover:text-blue-800 hover:cursor-pointer"
                onClick={() => playWinkHandler("heart")}
              >{`Play "Heart"`}</p>
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
                  {message.type === "voice" && (
                    <div className="font-semibold">
                      <p className="text-gray-500">{`Visitor <visitor@domain.com> says:`}</p>
                      <div className="w-14 h-fit pl-4 mt-1">
                        <Image
                          src={`/msn/voice.png`}
                          alt={`${message.text} clip chat`}
                          height={0}
                          width={0}
                          sizes="100vh"
                          className="w-full"
                        />
                      </div>
                      <div className="flex gap-2 pt-1">
                        <p
                          className="w-fit text-blue-500 underline pl-4 hover:text-blue-800 hover:cursor-pointer"
                          onClick={() => playVoiceHandler(message.text)}
                        >
                          Play/Stop
                        </p>
                        <a
                          href={message.text}
                          download="MSN-Voice-Clip"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <p className="w-fit text-blue-500 underline hover:text-blue-800 hover:cursor-pointer">
                            Save As
                          </p>
                        </a>
                      </div>
                    </div>
                  )}
                  {message.type === "wink" && (
                    <div className="font-semibold">
                      <p className="text-gray-500">{`Visitor <visitor@domain.com> says:`}</p>
                      <div className="w-18 h-16 pl-4 mt-1">
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
