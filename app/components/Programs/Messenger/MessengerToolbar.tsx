import Image from "next/image";
import React from "react";
import ToolbarButton from "./ToolbarButton";
import CircleButton from "./CircleButton";

type Props = {};

const MessengerToolbar = (props: Props) => {
  return (
    <div className="relative w-full h-full rounded-t-md grid grid-cols-[310px_1fr]">
      <div className="flex justify-end items-center gap-4 bg-[url(/msn/toolbar.png)] bg-repeat bg-contain">
        <CircleButton
          name="arrow"
          className="absolute top-1 left-1"
          height={15}
          width={15}
        />
        <ToolbarButton image="/msn/buttons/invite.png" name="Invite" />
        <ToolbarButton image="/msn/buttons/send.png" name="Send" />
        <ToolbarButton image="/msn/buttons/video.png" name="Video" />
        <ToolbarButton image="/msn/buttons/voice.png" name="Voice" />
        <ToolbarButton image="/msn/buttons/activities.png" name="Activities" />
        <ToolbarButton image="/msn/buttons/games.png" name="Games" />
      </div>
      <div className="h-full grid grid-cols-[50px_50px_37px_28px]">
        <div className="bg-[url(/msn/toolbar-left.png)] bg-no-repeat" />

        <div className="bg-[url(/msn/toolbar-center.png)] bg-repeat-x h-full w-full">
          <div className="flex flex-col justify-start items-center h-full w-full space-y-0.5">
            <div className="bg-[url(/msn/logo.png)] bg-no-repeat h-[22px] w-full" />
            <div className="w-full flex justify-start items-center gap-1">
              <CircleButton name="block" />
              <CircleButton name="paint" />
            </div>
          </div>
        </div>

        <div className="bg-[url(/msn/toolbar-right.png)] bg-no-repeat" />
        <div className="bg-[url(/msn/toolbar-end.png)] bg-repeat" />
      </div>
    </div>
  );
};

export default MessengerToolbar;
