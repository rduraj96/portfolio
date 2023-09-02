import React from "react";
import MessengerChat from "./MessengerChat";
import Avatar from "./Avatar";

type Props = {};

const MessengerReceiver = (props: Props) => {
  return (
    <div className="w-full h-full flex my-1 mx-2">
      <MessengerChat />
      <div className="w-[140px] h-full flex-none">
        <Avatar image="msn" />
      </div>
    </div>
  );
};

export default MessengerReceiver;
