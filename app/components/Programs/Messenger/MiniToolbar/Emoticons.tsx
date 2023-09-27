"use client";

import React, { Dispatch, SetStateAction, useState } from "react";
import * as Popover from "@radix-ui/react-popover";
import Image from "next/image";
import InputToolbarButton from "../InputToolbarButton";
import { emoticons } from "@/app/components/data/emoticons";

type Props = {
  text: string;
  setText: Dispatch<SetStateAction<string>>;
};

const Emoticons = ({ text, setText }: Props) => {
  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <div className="h-full">
          <InputToolbarButton image="happy" arrow={true} />
        </div>
      </Popover.Trigger>
      <Popover.Content side="top" align="start" className="outline-none">
        <div className="h-fit w-fit bg-white border-[1.25px] border-[#4e699c]">
          <div className="grid grid-cols-8 grid-rows-7">
            {Object.keys(emoticons).map((emote, i) => (
              <div
                key={i}
                className="flex justify-center items-center border-[1px] cursor-pointer px-1 py-1.5"
                onClick={() => setText(text + emote)}
              >
                <Image
                  src={emoticons[emote as keyof typeof emoticons]}
                  title={emote}
                  alt={emote}
                  height={18}
                  width={18}
                  unoptimized={true}
                  className="h-fit w-fit"
                />
              </div>
            ))}
          </div>
          <div className="w-full p-1 text-[10px] border-b-[1px] cursor-pointer">
            Show more emoticons...
          </div>
          <div className="w-full p-1 text-[10px] cursor-pointer">
            My emoticons...
          </div>
        </div>
        <Popover.Close asChild />
        {/* <Popover.Arrow /> */}
      </Popover.Content>
    </Popover.Root>
  );
};

export default Emoticons;
