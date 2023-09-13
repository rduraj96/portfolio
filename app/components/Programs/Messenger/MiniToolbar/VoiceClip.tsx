import React from "react";
import InputToolbarButton from "../InputToolbarButton";
import { useGlobalContext } from "@/app/context/store";
import { StatusMessages } from "react-media-recorder";

type Props = {
  status: StatusMessages;
  startRecording: () => void;
  stopRecording: () => void;
};

const VoiceClip = (props: Props) => {
  return (
    <div
      className="h-full"
      onMouseDownCapture={props.startRecording}
      onMouseUpCapture={props.stopRecording}
    >
      <InputToolbarButton
        image={
          props.status === "recording" ? "voice-clip-active" : "voice-clip"
        }
      />
    </div>
  );
};

export default VoiceClip;
