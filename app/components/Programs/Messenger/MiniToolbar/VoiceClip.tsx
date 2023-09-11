import React from "react";
import InputToolbarButton from "../InputToolbarButton";
import { useGlobalContext } from "@/app/context/store";
import { useReactMediaRecorder } from "react-media-recorder";

type Props = {};

const VoiceClip = (props: Props) => {
  const { messages, setMessages } = useGlobalContext();
  const handleVoiceClip = (blobUrl: string, blob: Blob) => {
    const newUrl = URL.createObjectURL(blob);
    setMessages([
      ...messages,
      {
        type: "voice",
        text: newUrl,
      },
    ]);
  };
  const { status, startRecording, stopRecording, mediaBlobUrl } =
    useReactMediaRecorder({
      audio: true,
      onStop: handleVoiceClip,
      mediaRecorderOptions: {},
    });

  return (
    <div
      className="h-full"
      onMouseDownCapture={startRecording}
      onMouseUpCapture={stopRecording}
    >
      <InputToolbarButton
        image={status === "recording" ? "voice-clip-active" : "voice-clip"}
      />
    </div>
  );
};

export default VoiceClip;
