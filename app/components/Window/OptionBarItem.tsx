import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const OptionBarItem = (props: Props) => {
  return (
    <div className="px-2 py-0.5 hover:bg-[#1660e8] hover:text-white">
      {props.children}
    </div>
  );
};

export default OptionBarItem;
