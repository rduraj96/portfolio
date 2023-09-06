import Image from "next/image";
import React from "react";

type Props = {};

const InputSelectButton = (props: Props) => {
  return (
    <div className="w-6 h-5 flex items-center justify-center transform -translate-y-1.5 bg-white rounded-b-md border-b-[3px] border-b-[#E2C47B] border-[1.25px] border-[#515c73] border-t-white border-t-[2px]">
      <Image
        src={"/msn/input-buttons/letter.png"}
        alt="letter-input-select-button"
        height={0}
        width={0}
        sizes="100vh"
        className="h-full w-auto py-0.5"
      />
    </div>
  );
};

export default InputSelectButton;
