import React from "react";
import MessengerInput from "./MessengerInput";
import Avatar from "./Avatar";

type Props = {};

const MessengerSender = (props: Props) => {
  return (
    <div className="w-full h-full flex flex-shrink-0 py-3 mx-2">
      <MessengerInput />
      <div className="w-[140px] h-full flex-none">
        <Avatar image="soccer" />
      </div>
    </div>
  );
};

export default MessengerSender;
