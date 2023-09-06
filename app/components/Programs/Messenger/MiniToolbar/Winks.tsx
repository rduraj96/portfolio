"use client";

import React, { useState } from "react";
import * as Popover from "@radix-ui/react-popover";
import Image from "next/image";
import InputToolbarButton from "../InputToolbarButton";
import WinkItem from "./WinkItem";

type Props = {};

const Winks = (props: Props) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Popover.Root open={open} onOpenChange={setOpen}>
      <Popover.Trigger asChild>
        <div className="h-full">
          <InputToolbarButton image="wink" arrow={true} />
        </div>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content side="top" className="outline-none">
          <div className="h-fit w-fit bg-[#eef3fa] border-[1.25px] border-[#4e699c] p-2">
            <div className="font-bold text-[#4b74bd] mb-1">My Winks</div>
            <div
              className="grid grid-cols-4 grid-rows-2 gap-y-1 gap-x-2"
              onClick={() => setOpen(false)}
            >
              <WinkItem wink="laughing" />
              <WinkItem wink="knock" />
              <WinkItem wink="smash" />
              <WinkItem wink="kiss" />
              <WinkItem wink="pig" />
              <WinkItem wink="roll" />
              <WinkItem wink="heart" />
              <WinkItem wink="bow" />
            </div>
            <div className="w-full mt-1 text-end text-[#4b74bd] font-semibold">
              more...
            </div>
          </div>
          <Popover.Close asChild />
          {/* <Popover.Arrow /> */}
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
};

export default Winks;
