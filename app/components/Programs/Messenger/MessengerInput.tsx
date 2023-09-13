import React, { useEffect, useState } from "react";
import InputToolbarButton from "./InputToolbarButton";
import InputSelectButton from "./InputSelectButton";
import { useGlobalContext } from "@/app/context/store";
import Winks from "./MiniToolbar/Winks";
import Backgrounds from "./MiniToolbar/Backgrounds";
import VoiceClip from "./MiniToolbar/VoiceClip";
import { useReactMediaRecorder } from "react-media-recorder";
import ProgressBar from "./MiniToolbar/ProgressBar";
import { useTimer } from "@/app/hooks/useTimer";

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

  const handleVoiceClip = (blobUrl: string, blob: Blob) => {
    stop();
    if (blob.size > 0) {
      const newUrl = URL.createObjectURL(blob);
      setMessages([
        ...messages,
        {
          type: "voice",
          text: newUrl,
        },
      ]);
    }
  };
  const { seconds, start, pause, reset, running, stop } = useTimer();
  const { status, startRecording, stopRecording } = useReactMediaRecorder({
    video: false,
    audio: true,
    onStart: start,
    onStop: handleVoiceClip,
    askPermissionOnMount: true,
  });

  useEffect(() => {
    if (seconds === 15) {
      stopRecording();
      stop();
    }
  }, [seconds]);

  return (
    <div className="flex flex-col min-h-32 mr-2 bg-white w-full rounded-md border-[1.25px] border-[#515c73] opacity-90">
      <div className="flex-none flex items-center gap-2 rounded-t-md border-b-[1px] border-[#515c73] py-0.5 px-3 bg-gradient-to-b from-[#c8d6ed] via-[#ebf2fb] to-[#c8d6ed]">
        <InputToolbarButton image="letter" />
        <InputToolbarButton image="happy" arrow={true} />
        <VoiceClip
          status={status}
          startRecording={startRecording}
          stopRecording={stopRecording}
        />
        <Winks />
        <Backgrounds />
        <InputToolbarButton image="gift" arrow={true} />
        <InputToolbarButton image="nudge" />
      </div>
      {status === "recording" ? (
        <div className="h-full w-full flex justify-center items-center">
          <div className="w-2/3">
            <ProgressBar progress={seconds} />
            <p className="p-0.5">
              {seconds > 15 ? "To cancel, keep holding and press ESC." : ""}
            </p>
          </div>
        </div>
      ) : (
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
              className="rounded-md border-[1.25px] border-[#93989C] bg-[#f9fafe] hover:shadow-[#E2C47B] hover:shadow-inner py-3 px-2 text-xs font-semibold text-[#717780] shadow-[inset_-4px_-4px_4px_rgba(192,201,224,1)]"
              onClick={handleSendPressed}
            >
              Send
            </div>
          </div>
        </div>
      )}

      <div className="flex-none flex justify-end h-6 pr-4 rounded-b-md border-t-[1px] border-[#515c73] py-1 bg-gradient-to-b from-[#c8d6ed] via-[#ebf2fb] to-[#c8d6ed]">
        <InputSelectButton />
      </div>
    </div>
  );
};

export default MessengerInput;
