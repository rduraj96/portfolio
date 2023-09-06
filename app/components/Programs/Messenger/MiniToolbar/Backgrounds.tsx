import React, { useState } from "react";
import * as Popover from "@radix-ui/react-popover";
import Image from "next/image";
import InputToolbarButton from "../InputToolbarButton";
import WinkItem from "./WinkItem";
import BackgroundItem from "./BackgroundItem";

type Props = {};

const Backgrounds = (props: Props) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Popover.Root open={open} onOpenChange={setOpen}>
      <Popover.Trigger asChild>
        <div className="h-full">
          <InputToolbarButton image="mountain" arrow={true} />
        </div>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content side="top" className="outline-none">
          <div className="h-fit w-fit bg-[#eef3fa] border-[1.25px] border-[#4e699c] p-2">
            <div className="font-bold text-[#4b74bd] mb-1">My Backgrounds</div>
            <div
              className="grid grid-cols-3 grid-rows-2 gap-y-1 gap-x-2"
              onClick={() => setOpen(false)}
            >
              <BackgroundItem background="default" />
              <BackgroundItem background="car" />
              <BackgroundItem background="planets" />
              <BackgroundItem background="lavender" />
              <BackgroundItem background="fish" />
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

export default Backgrounds;
